export const BASE_URL = process.env.REACT_APP_API_URL;
export const CONTROLLER_TYPE = {
    AUTH: BASE_URL + 'auth/',
    CONTROLLER_TYPE: BASE_URL + 'service/',
    CATEGORY: BASE_URL + 'category/',
    USER: BASE_URL + 'user/',
    SME_ASSET: BASE_URL + 'smeasset/',
    ASSET: BASE_URL + 'asset/',
    CONSUMER_INVITE: BASE_URL + 'consumerlite-invite/',
    PAYMENTS: BASE_URL + 'payments/',
    PLAN: BASE_URL + "plan/",
    FEEDBACK: BASE_URL + 'feedback/',
    CONSUMER_LITE_NOTIFICATION: BASE_URL + 'consumerlite-notification/'
};
export const USER_LOGIN = CONTROLLER_TYPE.AUTH + "signinbusinesslite";
export const USER_SIGNUP = CONTROLLER_TYPE.AUTH + "signupLite";
export const TWO_FACTOR_AUTH = CONTROLLER_TYPE.AUTH + "eanbleMFA";
export const MFA_AUTH = CONTROLLER_TYPE.AUTH + "validateotp";
export const RESEND_OTP = CONTROLLER_TYPE.AUTH + "regenerateotp";
export const GET_CATEGORIS_LIST = CONTROLLER_TYPE.CATEGORY + "listCategorylite";
export const GET_USER_WALLET = CONTROLLER_TYPE.SME_ASSET + "getUserWallet";
export const GET_USER_TRANSACTIONS = CONTROLLER_TYPE.SME_ASSET + "getUserTransactions";
export const GET_ITEMS_LIST = CONTROLLER_TYPE.SME_ASSET + "listItems";
export const GET_ACTIVE_ITEMS_LIST = CONTROLLER_TYPE.SME_ASSET + "listActiveItems";
export const GET_TOKENS_LIST = CONTROLLER_TYPE.SME_ASSET + "listAllAssets";
export const GET_ADD_ITEM = CONTROLLER_TYPE.SME_ASSET + "addItem";
export const GENERATE_TOKEN = CONTROLLER_TYPE.SME_ASSET + "addSMEAsset";
export const GET_USER_DETAILS = CONTROLLER_TYPE.USER + "getUserDetails";
export const UPDATE_USER_PROFILE = CONTROLLER_TYPE.ASSET + "uploadFiles";
export const GET_UPDATE_USERNAME = CONTROLLER_TYPE.USER + "updateUserName";
export const UPDATE_USER_WALLET_NAME = CONTROLLER_TYPE.USER + "updateWalletName";
export const UPDATE_USER_EMAIL = CONTROLLER_TYPE.USER + "updateUserEmail";
export const UPDATE_USER_PASSWORD = CONTROLLER_TYPE.CONTROLLER_TYPE + CONTROLLER_TYPE.AUTH + "change-password";
export const RESET_USER_PASSWORD = CONTROLLER_TYPE.USER + "resetPassword";
export const GET_ITEM_DETAILS = CONTROLLER_TYPE.SME_ASSET + "getItemDetails";
export const GET_TOKEN_DETAILS = CONTROLLER_TYPE.SME_ASSET + "getSMEAssetDetails";
export const GET_TOKEN_HISTORY = CONTROLLER_TYPE.SME_ASSET + "getTransferHistory";
export const ADD_TOKEN_NOTES = CONTROLLER_TYPE.SME_ASSET + "addSMEAssetNotes";
export const UPDATE_TOKEN_NOTES = CONTROLLER_TYPE.SME_ASSET + "updateSMEAssetNotes";
export const UPLOAD_ITEM_FILES = CONTROLLER_TYPE.SME_ASSET + "uploadFiles";
export const UPLOAD_LIST_ATTACHMENTS = CONTROLLER_TYPE.SME_ASSET + "listAttachments";
export const DELETE_TOKEN = CONTROLLER_TYPE.SME_ASSET + "updateSMEAssetsStatus";
export const TRANSFERDATA_TOKEN = CONTROLLER_TYPE.SME_ASSET + "transferSMEAssets";
export const UPDATE_ITEM = CONTROLLER_TYPE.SME_ASSET + "updateItem";
export const INACTIVATE_ITEM = CONTROLLER_TYPE.SME_ASSET + "inactivateItem";
export const DOWNLOAD_QR_CODE = CONTROLLER_TYPE.SME_ASSET + "downloadSMEQRCode";
export const DOWNLOAD_QR_CODE_ID = CONTROLLER_TYPE.SME_ASSET + "downloadTokenQRCode"
export const DOWNLOAD_QR_CODE_WITH_ID = CONTROLLER_TYPE.SME_ASSET + "downloadQRCode";
export const DOWNLOAD_QR_CODE_AS_PDF = CONTROLLER_TYPE.SME_ASSET + "downloadTokenQRCodesPDF";
export const DOWNLOAD_QR_CODE_AS_XLSX = CONTROLLER_TYPE.SME_ASSET + "downloadTokenQRCodesExcel";
export const BULK_UPLOAD_TOKENS = CONTROLLER_TYPE.SME_ASSET + "uploadSMEAssets";
export const FORGOTPASSWORT = CONTROLLER_TYPE.USER + "forgotLitePassword";
export const RESET_PASSWORD_DATA = CONTROLLER_TYPE.USER + "resetPassword";
export const INVITE_SEND = CONTROLLER_TYPE.CONSUMER_INVITE + "invite";
export const ACCEPT_EMAIL = CONTROLLER_TYPE.CONSUMER_INVITE + "accept";
export const AUTO_GENERATE = CONTROLLER_TYPE.SME_ASSET + "autoGenerateSMEAsset";
export const AUTO_GENERATE_STATUS = CONTROLLER_TYPE.SME_ASSET + "getAutogenerateStatus";
export const NOTIFICATION_DATA = CONTROLLER_TYPE.SME_ASSET + "getSMENotification";
export const MARK_ALL_READ = CONTROLLER_TYPE.CONSUMER_LITE_NOTIFICATION + "markAllRead";
export const QED_CHARGE = CONTROLLER_TYPE.PAYMENTS + "qed-charge";
export const QED_CREATE_PAYMENT_INTENT = CONTROLLER_TYPE.PAYMENTS + "create-payment-intent";
export const QED_RETRIEVE_PAYMENT_INTENT = CONTROLLER_TYPE.PAYMENTS + "retrieve-payment-intent";
export const QED_CREATE_CHECKOUT_SESSION = CONTROLLER_TYPE.PAYMENTS + "create-checkout-session";
export const QED_RETRIEVE_PAYMENT_SESSION = CONTROLLER_TYPE.PAYMENTS + "retrieve-session-details";
export const QED_PAYMENT_PLAN = CONTROLLER_TYPE.PLAN + "readPlan";
export const ADD_FEEDBACK = CONTROLLER_TYPE.FEEDBACK + "addFeedback";
export const TRANSFER_LIST = CONTROLLER_TYPE.SME_ASSET + "getTransferList";
export const FEEDBACK_LIST = CONTROLLER_TYPE.FEEDBACK + "listFeedback";
export const CATEGORY_LIST= CONTROLLER_TYPE.SME_ASSET + "getCategoryList"