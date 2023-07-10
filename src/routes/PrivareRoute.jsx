import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivareRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <div className='hero neg-margin min-h-screen'><span className='loading loading-infinity loading-lg'></span></div>;
    }
    if(user){
        return children;
    }
    return (
        <Navigate to='/login' replace={true}></Navigate>
    );
};

export default PrivareRoute;