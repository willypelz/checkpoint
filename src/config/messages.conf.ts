export const messages = {
    invalidURL: 'Invalid URL',
    invalidMerchantKey: 'Invalid Merchant Key',
    tripFailedEnd: 'Unable to end Trip, Please try again.',
    tripFailedStart: 'Unable to Start Trip, Please use proper location',
    tripOngoing: 'Trip has been initiated. Do not end trip until you get to your arrival to earn you point.',
    tripEnd: 'Trip ended with your point calculated. Cheers.',
    paymentSuccessful: 'payment was successful',
    paymentFailed: 'Transaction Failed',
    generatedSecret: 'Secret Generated Successfully',
    merchantSecretInValid: 'Invalid Merchant Secret',
    walletAlreadyExist: 'Wallet already exist for this account',
    moreThanOne: 'General Multiplier cannot be more than one',
    operationFailed: 'Failed to perform operation, please try again.',
    currentTrip: 'Current trip fetched successfully',
    querySearched: 'Query searched was success',
    notAllowedToDelete: 'You are not eligible to perform this operation',
    logoutFailed: 'Failed to logout, please try again',
    newPasswordGen: 'New Password Generated, Please check your inbox or spam to retrieve a new logon password.',
    sessionDeactive: 'Session deactivated successfully, Please check your inbox or spam to retrieve a new logon password.',
    noRefToken: 'This Hash sent does not exist',
    newPasswordGenFailed: 'Failed to generate new password, please try again',
    logoutSuccess: 'Logout successfully',
    errorEncountered: 'Error encountered, please try again',
    hashMismacth: 'Invalid Token provided. Please try again',
    noRedisStore: 'Invalid Token or Token expired.',
    list: 'Information was successfully listed',
    emailVerificationSent: 'Verification Email was successfully sent. please check your inbox or spam.',
    emailConfirm: 'Email Account was successfully verified. Thank you.',
    passwordChanged: 'Password was successfully changed.',
    passwordFailed: 'Unable to change password, please try again.',
    previousPassDisallowed: 'You cannot use your previous password as new password.',
    passwordDoNotMatch: 'Password do not match, please try again.',
    oldPasswordDoNotMatch: 'Old Password do not match, please try again.',
    noFound: 'The specified requirement is not found, please use valid credentials',
    notFound: 'The specified requirement is not found, please use valid credentials',
    alreadyExist: 'Information supplied already exist, please try again.',
    unable: 'Failed to update information, please try again',
    failedUpload: 'Failed to upload file, please try again.',
    imageBase64: 'Please specify base64 image and try again.',
    doesNotExistInUser: 'The provided information does not exist for this user, please try again',
    disabledByAdmin: 'Please contact the administrator to allow this operation.',
    noAuthHeader: 'Kindly Provide Authorization Header in request',
    sessionExpired: 'Your session has expired',
    notAuthorized: 'You are not authorized to have access to this resource',
    notAuthorizedPerform: 'You are not authorized to have perform this operation',
    notOrganizationUser: 'This traveller does not belong to your organization.',
    authorizationError: 'Unable to verify user credentials',
    notAccount: 'This account does not exist or match account we found',
    unassign: 'You cannot unassign selected information due to its usage by one or more resources',
    removeAsDefault: 'You cannot delete an information set as default. Please remove as default and try again',
    failed: 'No Data found',
    failedCreation: 'Information to be created failed, please try again.',
    failedToToggle: 'Toggle failed',
    failedToDelete: 'Delete Operation Failed.',
    deleteSuccess: 'This information was successfully deleted',
    userDelete: 'User deleted successfully.',
    toggle: 'Toggling was successfully',
    base64: 'Invalid base64 in file sent',
    emailExist: 'Email already exist',
    fileKey: 'No File Name Specified. please provide file name',
    invalidPwd: 'Invalid Password, Password should contain at least 8 characters having an uppercase letter, a special character and a number.',
    auth: {
        success: 'Login was successful',
        failed: 'Invalid login',
    },
    users: {
        created: 'User successfully created',
        updated: 'User successfully update',
        list: {
            success: 'users paginated list was successful',
            failed: 'No data found',
        },
        one: {
            success: 'user was successfully fetched',
            failed: 'No User found',
        },
    },
    wallets: {
            created: 'Wallet successfully created',
        updated: 'Wallet successfully update',
        list: {
            success: 'Wallets paginated list was successful',
            failed: 'No data found',
        },
        one: {
            success: 'Wallet was successfully fetched',
            failed: 'No Wallet found',
        },
    },
    history: {
        list: {
            success: 'History paginated list was successful',
            failed: 'No data found',
        },
        one: {
            success: 'History was successfully fetched',
            failed: 'No User found',
        },
    },
    validations: {
        req: {
            failed: 'Validation failed for supplied information',
            toValidate: 'invalid key in request',
            apiAccess: 'No access granted for you on this resource',
        },
    },
    invalid: {
        extension: 'Invalid File Extension',
        file_name: 'Invalid File name',
    },
    keyNotFound: 'Key not Found',
    storage: {
        notFound: 'Cannot remove unknown key in file storage',
    },
};