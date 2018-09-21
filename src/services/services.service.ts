import {Component} from '@nestjs/common';
import {
    getEnums, getNextSequenceValue, password,
    sendMail,
} from '../utils/utils';
import {MailEnum} from '../enums/mail.enum';
import {UserEnum} from '../enums/user.enum';
import {ENV} from '../env';
import {EmailSettings} from '../config/mail.conf';
import * as faker from 'faker';
import {UserNotFoundException} from '../shared/filters/throwable.not.found';
import {BadRequestException, forwardRef, Inject} from '@nestjs/common';
import {messages} from '../config/messages.conf';
import {User} from '../models/user';
import {LogoutEnum} from '../enums/logout.enum';
import {LoginInfo} from '../models/login_info';
import {Model} from 'mongoose';
import {Counter} from '../models/counter';
import {modelCounter} from '../config/constants.conf';
import {SearchHistory} from '../models/search_history';
import {isWebUri} from 'valid-url';
import {UserService} from './user.service';
import {ReqInstance} from '../shared/interceptors/req.instance';

@Component()
export class ServicesService {
    constructor(@Inject('UserRepo') private readonly userRepo: Model<User>,
                @Inject('SearchHistoryRepo') private readonly searchHistoryRepo: Model<SearchHistory>,
                @Inject('LoginInfoRepo') private readonly loginInfoRepo: Model<LoginInfo>,
                @Inject('CounterRepo') private readonly counterRepo: Model<Counter>,
                @Inject(forwardRef(() => UserService))
                private userService: UserService) {
    }

    getEnums() {
        return {
            mail: getEnums(MailEnum),
            user: getEnums(UserEnum),
            logout_by: getEnums(LogoutEnum),
        };
    }

    async changePassword(passwordSettings) {
        if ((passwordSettings.new_password !== passwordSettings.confirm_password)) throw new BadRequestException(messages.passwordDoNotMatch);
        const user = ReqInstance.req.user;
        const dbUser = await this.userRepo.findOne({_id: user.id});
        if (!(password.verify(passwordSettings.old_password, dbUser.password))) throw new BadRequestException(messages.oldPasswordDoNotMatch);
        if (password.verify(passwordSettings.new_password, dbUser.password)) throw new BadRequestException(messages.previousPassDisallowed);
        const data = await this.userRepo.update({_id: user.id}, {$set: {password: password.hash(passwordSettings.new_password)}});
        if (!data['nModified']) throw new BadRequestException(messages.unable);
        return true;
    }

    async logout(status, ref_token) {
        const data = await this.loginInfoRepo.update({ref_token}, {$set: {status}});
        if (!data['nModified'] && status !== LogoutEnum.SYSADMIN) throw new BadRequestException(messages.logoutFailed);
        return true;
    }

    async generateNewPassword(value, forgetPassword?: boolean) {
        let user: User = null;
        if (forgetPassword) {
            user = await this.userRepo.findOne({email: value});
            if (!user) throw new UserNotFoundException();
        } else throw new BadRequestException(messages.noFound);
        const pwd = faker.random.uuid().substring(0, 8);
        user['password'] = pwd;
        const data = await this.userRepo.update({_id: user['id']}, {$set: {password: password.hash(pwd)}});
        if (!data['nModified']) throw new BadRequestException(messages.newPasswordGenFailed);
        this.sendNewPasswordByMail(user);
        return true;
    }

    async logActiveUser(req, data) {
        const logger = await this.loginInfoRepo.create({
            _id: await getNextSequenceValue(this.counterRepo, modelCounter.loginInfo),
            user_id: data.id,
            ref_token: data.ref_token,
            browser_agent: req.browser_agent,
            ip_address: req.ip_address,
        });
        if (!logger || !logger.id) throw new BadRequestException(messages.errorEncountered);
        return true;
    }


    private async sendNewPasswordByMail(data) {
        const template = {name: 'new_password', ...{data}};
        const to = (ENV.current() === 'production') ? data.email : (ENV.current() === 'test')
            ? EmailSettings.test.emails.toString() : EmailSettings.dev.emails.toString();
        const params = {
            text: ` Hello ${data.first_name} ${data.last_name},
                        Kindly use this new password generated below to log on to your account.
                        Password: ${data.password},
                        Please change this password from 'Profile' once you have accessed your CBA Risk Management System Account. Thank you`,
            ...{to},
            subject: 'New Account Password',
        };
        sendMail(params, template);
    }

}
