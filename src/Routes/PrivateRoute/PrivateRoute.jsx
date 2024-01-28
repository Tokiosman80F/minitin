import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    let location=useLocation()
    if(loader) return  <progress className="progress w-56"></progress>
    if(user?.email) return children
    return (
        <Navigate to="/signin" state={{from:location}} replace>
            {children}
        </Navigate>
    );
};

export default PrivateRoute;