import React from 'react'
import { vNum, vEmail, strongRegularExp } from '../constants/constants';
import * as DateHandling from '../utility-files/date-util/DateHandling'
import { isIntegerValue, isStringValue } from '../utility-files/data-util/DataHandling';
import { TreeSelect } from 'antd';

function CustomInput(props) {
    const {
        fieldType,
        classType,
        setFieldData,
        filedData,
        fieldId,
        keyName,
        selectList,
        defaultName,
        isReadOnly,
        getSearchResults,
        headerName,
        objKey,
        placeholderType,
        onMouseOver,
        onMouseOut,
        ...rest
    } = props;

    const handleInputValues = (inputKey, data) => {
        let charLength = data?.length;
        let minLength = charLength <= 50;
        let maxLength = charLength <= 100;
        let textAreaLength = charLength <= 200;
        let dataHandler = data.replace(/[^\w\s]/gi, "");
        dataHandler = dataHandler.replace("_", "");
        let dataHanle=data.replace(/^[\d\(\)\-+_]+$/.test,"")
        dataHanle=dataHanle.replace("_","");
        switch (inputKey) {
            case 'link':
                var regex = new RegExp("^((http|https)://)[-a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)$");
                if (minLength && !/[0-9]/g.test(data)) {
                    setFieldData(state => ({ ...state, [keyName]: data, isUrlValid: regex.test(data.toLowerCase()) }));
                    
                }
                break;
            case 'text':
                if (keyName === 'description' && maxLength) {
                    setFieldData(state => ({ ...state, [keyName]: data }));
                } else if (objKey && minLength) {
                    setFieldData(state => ({ ...state, [objKey]: { ...filedData[objKey], [keyName]: dataHandler } }))
                } else if (keyName === 'confirmPassword' && minLength) {
                    setFieldData(state => ({ ...state, [keyName]: data, isConfirmPasswordValid: strongRegularExp?.test(data) }));
                } else if (keyName === 'currentPassword' && minLength) {
                    setFieldData(state => ({ ...state, [keyName]: data, isCurrentPasswordValid: strongRegularExp?.test(data) }));
                } else if (keyName === 'password' && minLength) {
                    setFieldData(state => ({ ...state, [keyName]: data, isPasswordValid: strongRegularExp?.test(data) }));
                } else if (keyName==="name" && minLength){
                    setFieldData(state=>({...state,[keyName]:data}));
                }
                else if (minLength) {
                    setFieldData(state => ({ ...state, [keyName]: dataHandler }));
                }
                break;
            case 'textarea':
                if (keyName === 'description' && maxLength) {
                    setFieldData(state => ({ ...state, [keyName]: data }));
                } else if (keyName === 'mailBody' && textAreaLength) {
                    setFieldData(state => ({ ...state, [keyName]: data }));
                } else if (maxLength) {
                    setFieldData(state => ({ ...state, [keyName]: data }));
                }
                break;
            case 'search':
                if (!headerName) {
                    getSearchResults(data);
                } else {
                    setFieldData(state => ({ ...state, [keyName]: data }));
                }
                break;
            case 'number':
                if (/^[0-9\b]+$/.test(isIntegerValue(parseInt(data))) || data === '') {
                    if (keyName === 'tokenNumber' && data?.length <= 3) {
                        setFieldData(state => ({ ...state, [keyName]: data }));
                    }
                    if (keyName !== 'tokenNumber') {
                        setFieldData(state => ({ ...state, [keyName]: data }));
                    }
                }
                break;
            case 'phone':
                if ((dataHandler.match(/^\d+$/) || dataHandler === '') && dataHandler?.length <= 15) {
                    if (keyName === 'otp' && dataHandler?.length <= 5) {
                        setFieldData(state => ({ ...state, [keyName]: dataHandler }));
                    } else if (keyName !== 'otp') {
                        setFieldData(state => ({ ...state, [keyName]: dataHandler }));
                    }
                }
                break;
            case 'password':
                if (keyName === 'confirmPassword' && minLength) {
                    setFieldData(state => ({ ...state, [keyName]: data, isConfirmPasswordValid: strongRegularExp?.test(data) }));
                } else if (keyName === 'currentPassword' && minLength) {
                    setFieldData(state => ({ ...state, [keyName]: data, isCurrentPasswordValid: strongRegularExp?.test(data) }));
                } else if (keyName === 'password' && minLength) {
                    setFieldData(state => ({ ...state, [keyName]: data, isPasswordValid: strongRegularExp?.test(data) }));
                }
                break;
            case 'email':
                if (keyName === 'email' && minLength) {
                    setFieldData(state => ({ ...state, [keyName]: data, isEmailValid: vEmail?.test(data) }));
                }
                break;
            default:
                if (keyName && minLength) {
                    console.log(data, keyName, minLength, selectList);
                    setFieldData(state => ({ ...state, [keyName]: data }));
                }
                break;
        };
    };

    const inputValues = () => {
        if (fieldType === "email") {
            return <input
                type={isStringValue(fieldType)}
                id={isStringValue(fieldId)}
                value={filedData && keyName ? filedData[keyName] : isStringValue(defaultName)}
                className={isStringValue(classType)}
                onChange={(event) => handleInputValues(fieldType, event.target.value)}
                readOnly={isReadOnly === 'true' ? true : false}
                placeholder={isStringValue(placeholderType)}
                {...rest}
            />
        };

        if (fieldType === "password") {
            return <input
                type={isStringValue(fieldType)}
                id={isStringValue(fieldId)}
                value={filedData && keyName ? filedData[keyName] : isStringValue(defaultName)}
                className={isStringValue(classType)}
                onChange={(event) => handleInputValues(fieldType, event.target.value)}
                placeholder={isStringValue(placeholderType)}
                {...rest}

            />
        };

        if (fieldType === "text" && !objKey) {
            return <input
                type={isStringValue(fieldType)}
                id={isStringValue(fieldId)}
                value={filedData && keyName ? filedData[keyName] : isStringValue(defaultName)}
                className={isStringValue(classType)}
                onChange={(event) => handleInputValues(fieldType, event.target.value)}
                readOnly={isReadOnly === 'true' ? true : false}
                placeholder={isStringValue(placeholderType)}
                {...rest}
            />
        };

        if (fieldType === "link") {
            return <input
                type={isStringValue('text')}
                id={isStringValue(fieldId)}
                value={filedData && keyName ? filedData[keyName] : isStringValue(defaultName)}
                className={isStringValue(classType)}
                onChange={(event) => handleInputValues(fieldType, event.target.value)}
                readOnly={isReadOnly === 'true' ? true : false}
                placeholder={isStringValue(placeholderType)}
                {...rest}
            />
        };

        if (fieldType === "text" && objKey) {
            return <input
                type={isStringValue(fieldType)}
                id={isStringValue(fieldId)}
                value={filedData && keyName ? filedData[objKey][keyName] : isStringValue(defaultName)}
                className={isStringValue(classType)}
                onChange={(event) => handleInputValues(fieldType, event.target.value.replace(/[^\w\s]/gi, ""))}
                readOnly={isReadOnly === 'true' ? true : false}
                placeholder={isStringValue(placeholderType)}
                {...rest}
            />
        };

        if (fieldType === "textarea") {
            return <textarea
                id={isStringValue(fieldId)}
                name={keyName}
                value={filedData && keyName ? filedData[keyName] : isStringValue(defaultName)}
                rows="4" cols="73"
                onChange={(event) => handleInputValues(fieldType, event.target.value.replace(/^[\d\(\)\-+_]+$/.test, ""))}
                readOnly={isReadOnly === 'true' ? true : false}
                placeholder={isStringValue(placeholderType)}
                {...rest}
            />
        };

        if (fieldType === "number") {
            var invalidChars = [
                ".",
                "-",
                "+",
                "e",
            ];
            return <input
                type={isStringValue(fieldType)}
                id={isStringValue(fieldId)}
                value={filedData && keyName && filedData[keyName] !== 0 ? filedData[keyName] : isStringValue(defaultName)}
                className={isStringValue(classType)}
                onChange={(event) => handleInputValues(fieldType, event.target.value.replace(/[^\w\s]/gi, ""))}
                readOnly={isReadOnly === 'true' ? true : false}
                placeholder={isStringValue(placeholderType)}
                onKeyDown={(e) => {
                    if (invalidChars.includes(e.key)) {
                        e.preventDefault();
                    }
                }}
                {...rest}
            />
        };

        if (fieldType === "phone") {
            return <input
                type={"text"}
                id={isStringValue(fieldId)}
                value={filedData && keyName && filedData[keyName] !== 0 ? filedData[keyName] : isStringValue(defaultName)}
                className={isStringValue(classType)}
                onChange={(event) => handleInputValues(fieldType, event.target.value)}
                readOnly={isReadOnly === 'true' ? true : false}
                placeholder={isStringValue(placeholderType)}
                {...rest}
            />
        };

        if (fieldType === "date") {
            return <input
                type={fieldType}
                id={isStringValue(fieldId)}
                value={filedData && keyName && filedData[keyName] ? filedData[keyName] : ''}
                className={isStringValue(classType)}
                onChange={(event) => handleInputValues(fieldType, event.target.value)}
                {...rest}
            />
        };

        if (fieldType === "select" && selectList?.length !== 0) {
            return <select name={`${keyName}`} className={isStringValue(classType)} id={`${keyName}`} value={filedData && keyName ? filedData[keyName] : ''} onChange={(event) => handleInputValues(fieldType, event.target.value)}>
                {selectList?.map((item) => {
                    return <option key={item?.id} value={item?.id}>{item?.name}</option>
                })}
            </select>
        };
    };

    return (<> {inputValues()} </>)
}

export default CustomInput