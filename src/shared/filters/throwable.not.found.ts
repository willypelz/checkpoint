import {HttpStatus, HttpException} from '@nestjs/common';

export class NotFoundException extends HttpException {
    constructor(msg: string | object) {
        super(msg, HttpStatus.NOT_FOUND);
    }
}

export class UserNotFoundException extends NotFoundException {
    constructor() {
        super('User not found.');
    }
}


export class InsufficientBalance extends NotFoundException {
    constructor(walletAmount?: number) {
        super(`Insufficient Balance in Customer Wallet. Customer Balance is : ${walletAmount}`);
    }
}

export class TransactionFailure extends NotFoundException {
    constructor() {
        super(`Transaction failed, please try again`);
    }
}