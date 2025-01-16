export const storageType = 'localStorage';

export const storageKey = {
    TOKEN: 'token-lite',
    USER_DETAILS: 'user_details',
    USER_IMG_THEME: 'usrthm'
};

export const clearData = () => {
    localStorage.clear();
}

export const setStorageData = (storage, key, data) => {
    if (storage === storageType) {
        localStorage.setItem(key, data);
    } else {
        sessionStorage.setItem(key, data);
    }
};

export const getStorageData = (storage, key) => {
    if (storage === storageType) {
        return localStorage.getItem(key);
    } else {
        return sessionStorage.getItem(key);
    }
};