import React, { Suspense, lazy } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { storageKey, getStorageData, storageType } from '../utility-files/storege-util/StorageHandling';
import { path } from '../utility-files/helper-function/HelperFunction';
import CustomLoader from '../custom-ui/CustomLoader';
const Header = lazy(() => import('../common-pages/Header'));
const CommonLoginModule = lazy(() => import('../pages/user-module/CommonLoginModule'));

export const LoginSignupRoute = ({ children }) => {
    const location = useLocation();
    const moduleHandler = () => {
        if (getStorageData(storageType, storageKey.TOKEN) || getStorageData(!storageType, storageKey.TOKEN)) {
            return <Navigate replace to={path.HOME} />
        } else {
            return children
        }
    };
    return <>
        <Suspense fallback={<CustomLoader />}>
            <Header />
            {location.pathname === path.ABOUTUS ?
                moduleHandler()
                : <CommonLoginModule>
                    {moduleHandler()}
                </CommonLoginModule>}
        </Suspense>
    </>
}


export default LoginSignupRoute