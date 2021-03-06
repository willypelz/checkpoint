import {forwardRef, Module} from '@nestjs/common';
import {HttpExceptionFilter} from '../shared/filters/http.exception.filter';
import {DbModule} from './db.module';
import {UserModule} from './user.module';
import {ServicesController} from '../controllers/services.controller';
import {
    counterRepo, loginInfoRepo, checkInLogRepo, transactionRepo, walletRepo,
} from '../repos/models.repository';
import {ServicesService} from '../services/services.service';
import {DecodeEncryptedRequestInterceptor} from '../shared/interceptors/decode.encrypted.request.interceptor';
import {HttpModule} from '@nestjs/common/http';
import {ReqInstanceInterceptor} from '../shared/interceptors/req.instance.interceptor';
import {WalletService} from "../services/wallet.service";
import {TransactionService} from "../services/transaction.service";
import {AuthorizationInterceptor} from "../shared/interceptors/authorization.interceptor";
import {WalletController} from "../controllers/wallet.controller";
import {LogService} from "../services/log.service";

@Module({
    imports: [
        DbModule,
        HttpModule,
        forwardRef(() => UserModule),
    ],
    components: [
        ...loginInfoRepo,
        ...counterRepo,
        ...checkInLogRepo,
        ...transactionRepo,
        ...walletRepo,
        WalletService,
        ServicesService,
        TransactionService,
        LogService,
        HttpExceptionFilter,
        AuthorizationInterceptor,
        ReqInstanceInterceptor,
        DecodeEncryptedRequestInterceptor,
    ],
    exports: [
        ...loginInfoRepo,
        ...counterRepo,
        ...checkInLogRepo,
        ...transactionRepo,
        ...walletRepo,
        WalletService,
        HttpExceptionFilter,
        AuthorizationInterceptor,
        ServicesService,
        LogService,
        TransactionService,
        DecodeEncryptedRequestInterceptor,
        ReqInstanceInterceptor,
        DbModule,
    ],
    controllers: [ServicesController, WalletController],
})
export class SharedModule {

}