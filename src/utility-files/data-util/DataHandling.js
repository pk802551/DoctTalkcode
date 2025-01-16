export const isNotUndefinedOrNull = (value) => {
    if (value !== null && value !== undefined) {
        return value
    }
};

export const isBooleanValue = (value) => {
    if (isNotUndefinedOrNull(value)) {
        return true;
    } else {
        return false;
    };
};

export const isStringValue = (value) => {
    if (isNotUndefinedOrNull(value)) {
        return value.toString();
    } else {
        return '';
    };
};

export const isIntegerValue = (value) => {
    if (isNotUndefinedOrNull(value)) {
        return parseInt(value);
    } else {
        return 0;
    };
};

export const isArrayValue = (value) => {
    if (isNotUndefinedOrNull(value) && value?.length !== 0) {
        return value;
    } else {
        return [];
    };
};

export const isObjectValue = (value) => {
    if (isNotUndefinedOrNull(value) && Object.keys(value)?.length !== 0) {
        return value;
    } else {
        return {};
    };
};
