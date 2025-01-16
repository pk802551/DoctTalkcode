import React, { Suspense, lazy } from 'react'
import { Navigate } from 'react-router-dom';
import { storageKey, getStorageData, storageType } from '../utility-files/storege-util/StorageHandling';
import { path } from '../utility-files/helper-function/HelperFunction';
import CustomLoader from '../custom-ui/CustomLoader';
const Header = lazy(() => import('../common-pages/Header'));

export const PrivateRoute = ({ children }) => {
    const isWelcomePage = window.location.pathname === path.WELCOME;
    const token = getStorageData(storageType, storageKey.TOKEN) ? getStorageData(storageType, storageKey.TOKEN) : getStorageData(!storageType, storageKey.TOKEN);
    return <>
        <Suspense fallback={<CustomLoader />}>
            <Header />
            {isWelcomePage && !token && children}
            {!isWelcomePage && token ? children : <Navigate replace to={path.WELCOME} />}
        </Suspense>
    </>
}


export default PrivateRoute