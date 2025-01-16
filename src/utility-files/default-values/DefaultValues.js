
export const IMAGE = "image/x-png,image/gif,image/jpeg,image/webp";
export const ATTACHMENTS = "application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel";
export const CSV = ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
export const itemsData = [];
export const REDIRECT_URL = "http://localhost:3005/success/";
export const REDIRECT_CANCEL_URL = "http://localhost:3005/cancel";
// const redirect_URL = "http://businesslite.s3-website-us-west-1.amazonaws.com/succeess/";

export const IMAGE_TYPES = {
    USER_LOGIN: require('../../assets/images/logo.jpg'),  
};

export const getDefaultValues = () => {
    let variables = {}
    variables.LOGIN_VARIABLES = {
        email: '',
        password: ''
    };
    variables.ALERT_OPTIONS = {
        showButton: false
    };
    variables.SIGNUP_VARIABLES = {
        email: "",
        firstName: "",
        contactNumber: '',
        companyName: '',
        systemIdentifier: "",
        password: "",
        confirmPassword: "",
        productCategory: ""
    };
    variables.CATEGORY_VARIABLES = {
        pageNo: 0,
        perPageItem: 0,
        name: "",
        Columns: [""]
    };
    variables.ITEM_LIST_VARIABLES = {
        pageNo: 0,
        perPageItem: 0,
        name: "",
        searchText: "",
        category: "",
        skuCode: "",
        upcCode: "",
        identifierCode: "",
        flag: 0,
        createDate: ""
    };
    variables.ADD_ITEM_LIST_VARAIABLES = {
        name: '',
        description: "",
        category: "",
        skuCode: "",
        upcCode: "",
        identifierCode: "",
        dataLinks: "",
    };
    variables.UPLOAD_TYPE_VARIABLES = [
        {
            moduleId: "",
            module: "User",
            fileName: "",
            ordBy: 0,
            uploadType: 0,
            byteArray: ""
        }
    ];
    variables.GENERATE_TOKEN_VARIABLES = {
        itemId: 0,
        upcCode: "",
        serialNo: "",
        otherIdentifierCode: "",
        description: "",
        notes: "",
        expiryDate: ""
    }
    variables.TOKENS_LIST_VARIABLES = {
        pageNo: 0,
        perPageItem: 0,
        serialNumber: "",
        flag: 0,
        timeFlag: 0,
        createDate: "",
        searchText: "",
        index: "",
        owner: ""
    }
    variables.TOKEN_DETAILS_VARIABLES = {
        pageNo: 0,
        perPageItem: 0,
        index: ""
    }
    variables.TOKEN_TRANSFER = {
        email: "",
        index: [""]
    }

    return variables;
};

export const TOUR_STEPS = [
    {
        target: ".qed-logo",
        content: "This is our tour logo.",
        disableBeacon: true,
    },
    {
        target: ".my-sm-0",
        content: "click here to go to signup page",
    },
    {
        target: ".login",
        content: "Login from here 😉.",
    },
    {
        target: ".google-signin",
        content: "Sign in with Google 😉.",
    },
];

export const JOY_RIDE_STYLES = {
    tooltipContainer: {
        textAlign: "left"
    },
    buttonNext: {
        backgroundColor: "#005DFF"
    },
    buttonBack: {
        marginRight: 10,
        color: "#005DFF"
    },
    buttonClose: {
        display: 'none',
    }
};

export const LOCALE_INPUT = {
    last: "End tour",
    skip: "Skip"
};

export const PLACE_HOLDER_TEXT = {
    email: "Enter your email here",
    password: "Enter your password here",
    newPassword: 'Enter your new password',
    confirmPassword: 'Please confirm your new password',
    wallet_Name: "Enter your wallet name here",
    item_name: "Enter item name",
    serial_no: "Enter serial number",
    identifier: 'Enter a value',
    description: 'Enter description here',
    skuCode: 'Enter sku code here',
    upcCode: 'Enter upc code here',
    otp: 'Enter OTP here',
    CURRENT_PASSWORD: "Current Password",
    notes: 'Enter notes here',
};

export const DEFAULT_HOLDER_VALUES = {
    loading: 'Please wait...'
};

export const CONTENT_LIST = [
    {
        id: 0,
        image: IMAGE_TYPES.CUBE_BOX,
        action_name: 'Add Item',
        data_target: '#AddItem'
    },
    {
        id: 2,
        image: IMAGE_TYPES.GENERATE_LOGO,
        action_name: 'Generate Token',
        data_target: '#CreateToken'
    },
    {
        id: 1,
        image: IMAGE_TYPES.TRANSFER_LOGO,
        action_name: 'Transfer Token',
        data_target: '#TransferToken'
    }
];

export const FILTER_LIST = [
    {
        id: '2',
        name: 'All'
    },
    {
        id: '0',
        name: 'Recently added'
    },
    {
        id: '1',
        name: 'Last Month'
    },
];