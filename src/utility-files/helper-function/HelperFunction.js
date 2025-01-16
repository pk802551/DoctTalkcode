
export const path = {
    HOME: '/',
    ABOUT: '/about',
    BLOG:'/blogPage'

};

export const PATH_SLUG = {
    MFA: '/:id/:rem',
    CONFIRM_PASSWORD: ':email',
    ACCEPT_INVITE: ":index/:inviteCode/:email",
    ITEM_DETAILS: '/:index/:id',
    PAYMENTS: '/:secret'
}

export const alertTypes = {
    INFO: 'info',
    SUCCESS: 'success',
    ERROR: 'error'
};

export const alertMessages = {
    LOGGEDIN: 'user logged in',
    SIGNUP: 'user signed up',
    ENTER_CREDENTIALS: 'Please enter your credentials',
    ENTER_NAME: 'Please enter Item name',
    ENTER_COMPANYNAME: 'Please enter your Company name ',
    ENTER_NUMBER: 'Please enter your phone number',
    ENTER_EMAIL: 'Please enter your email',
    ENTER_PASSWORD: 'Please enter your password',
    ENTER_CONFIRMPASSWORD: "Password  and confirm password should be same",
};

export const errorMessages = {
    ENTER_VALID_EMAIL: "Please enter a valid email",
    ENTER_NAME: "Please enter your name",
    PASSWORD: 'Password length must be eight or more characters and must contain special characters.',
    SELECT_ITEM: "Please select the item"
}

// export const modelType = {
//     ADD_ITEM: "ADD_ITEM",
// }

// export const copyText = (text) => {
//     navigator.clipboard.writeText(text).then(function () {
//     }, function (err) {
//         console.error(err);
//     });
// };

// export const getApiResponse = async (request) => {
//     let res = null;
//     await callHttpRequest(request).then(response => {
//         if (response?.status === 201) {
//             res = response?.data;
//         }
//     }).catch((err) => {
//         res = err;
//     });
//     return res;
// };


// export const getBuffer = (buffer) => {
//     let bufferNew = buffer?.split(",");
//     if (bufferNew.length >= 1) {
//         bufferNew = bufferNew[1];
//     }
//     return bufferNew;
// };

// export const convertBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//         const fileReader = new FileReader();
//         fileReader.readAsDataURL(file);

//         fileReader.onload = () => {
//             let baseURL = fileReader.result
//             resolve(baseURL);
//         };

//         fileReader.onerror = (error) => {
//             reject(error);
//         };
//     });
// };

// export const handleFileUpload2 = async (event, uploadType, itemIndex, attachmentsList) => {
//     let uploadFilesData = [];
//     if (attachmentsList && attachmentsList?.length !== 0) {
//         attachmentsList.forEach(element => {
//             element.isValid = true;
//         })
//         uploadFilesData = attachmentsList;
//     };
//     let uploadDataType = {};
//     uploadDataType.event = event;
//     uploadDataType.byteArray = '';
//     uploadDataType.fileName = '';
//     uploadDataType.fileUrl = '';
//     uploadDataType.uploadType = FILE_HANDLER.ADD;
//     uploadDataType.uploadEventType = uploadType;
//     if (uploadType === 'profile') {
//         uploadDataType.moduleId = userDetails()?.id;
//         uploadDataType.module = "User";
//         uploadDataType.ordBy = 0;
//     } else {
//         uploadDataType.itemIndex = itemIndex;
//         uploadDataType.fileType = uploadType;
//         uploadDataType.ordBy = 0;
//     };
//     let filesData = uploadDataType.event.target.files;
//     if (uploadDataType.uploadEventType === 'profile') {
//         let buffer = await convertBase64(filesData[0]);
//         return [{
//             ...uploadDataType,
//             fileName: filesData[0].name,
//             byteArray: getBuffer(buffer),
//             fileUrl: buffer,
//             isValid: checkValidUpload(filesData[0].name, uploadDataType.uploadEventType)
//         }];
//     } else {
//         for (let index = 0; index < filesData?.length; index++) {
//             let image = filesData[index];
//             let fileName = filesData[index].name;
//             let buffer = await convertBase64(image);
//             uploadFilesData.push({
//                 ...uploadDataType,
//                 byteArray: getBuffer(buffer),
//                 fileUrl: buffer,
//                 fileName: fileName,
//                 isValid: checkValidUpload(fileName, uploadDataType.uploadEventType)
//             });
//         }
//         uploadFilesData.forEach((element, index) => {
//             element.ordBy = index;
//             element.uploadType = element.uploadType ? element.uploadType : FILE_HANDLER.ADD;
//             imageKeysRemove.forEach(data => {
//                 delete element[data];
//             });
//         });
//         return uploadFilesData;
//     };
// };


// export const handleLogOut = () => {
//     localStorage.clear();
//     sessionStorage.clear();
//     window.location.href = path.HOME;
// };

// export const downloadXMLfile = (data, filename) => {
//     var link = document.createElement('a');
//     link.href = window.URL.createObjectURL(data);
//     link.download = filename;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// };

// export const TOKENS_JSON = [
//     {
//         upcCode: "TEST01",
//         serialNo: "TEST01",
//         // otherIdentifierCode: "TEST01",
//         // description: "Test item one",
//         notes: "TEST01",
//     },
//     {
//         upcCode: "",
//         serialNo: "TEST001",
//         // otherIdentifierCode: "",
//         // description: "Test item two",
//         notes: "",
//     },
//     {
//         upcCode: "TEST03",
//         serialNo: "TEST03",
//         // otherIdentifierCode: "TEST03",
//         // description: "Test item three",
//         notes: "TEST03",
//     },
//     {
//         upcCode: "TEST001",
//         serialNo: "",
//         // otherIdentifierCode: "",
//         // description: "Test item four",
//         notes: "",
//     }
// ]

// export const jsonToXLSXFile = async (array, name) => {
//     let jsonArray = [];
//     let fileName = '';
//     if (isArrayValue(array)?.length !== 0 && isStringValue(name) !== '') {
//         jsonArray = isArrayValue(array);
//         fileName = isStringValue(name)
//     } else {
//         jsonArray = TOKENS_JSON;
//         fileName = `QED_lite_token${getCurrentDate()}.xlsx`
//     };
//     const ws = utils.json_to_sheet(jsonArray);
//     const wb = utils.book_new();
//     utils.book_append_sheet(wb, ws, "QEDValt");
//     writeFileXLSX(wb, fileName);
// };

// export const FILE_HANDLER = {
//     ADD: 0,
//     UPDATE: 1,
//     DELETE: 2
// };

// export const checkValidUpload = (fileName, uploadDataType) => {
//     var splitString = fileName.split(".");
//     var fileExt = splitString[splitString.length - 1];
//     let isValid = false;
//     if (uploadDataType.toLowerCase() === 'profile' || uploadDataType.toLowerCase() === 'file') {
//         if (fileExt.toLowerCase() == "jpeg" || fileExt.toLowerCase() == 'jfif' || fileExt.toLowerCase() == "jpg" || fileExt.toLowerCase() == "gif" || fileExt.toLowerCase() == "png" || fileExt.toLowerCase() == "webp") {
//             isValid = true;
//         };
//     } else {
//         if (fileExt.toLowerCase() == "pdf" || fileExt.toLowerCase() == "doc" || fileExt.toLowerCase() == "docx" || fileExt.toLowerCase() == "xls" || fileExt.toLowerCase() == "xlsx" || fileExt.toLowerCase() == "txt") {
//             isValid = true;
//         };
//     };
//     return isValid;
// }

// export const getUuid = () => {
//     let firstHalf = Date.now().toString(36);
//     let secondHalf = Math.random().toString(36).substring(2, 9);
//     return firstHalf + secondHalf
// };