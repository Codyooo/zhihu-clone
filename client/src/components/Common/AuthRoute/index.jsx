import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Storage from '../../../utils/storage';
import * as jwtDecode from 'jwt-decode';

const checkAuth = () => {
    const token = Storage.getToken();
    const refreshToken = Storage.getToken();
    if (!token && !refreshToken) {
        return false;
    }
    try {
        const { exp } = jwtDecode(token);
        if (exp && exp < new Date().getTime() / 1000) {
            return false
        }
    } catch (error) {
        return false;
    }
    return true;
}

const AuthRoute = ({ component: Component, ...rest }) => {
    if (!Component) return null;
    return <Route {...rest} render={props => checkAuth() ?
        <Component {...props} /> : <Redirect to={{ pathname: '/signin' }} />
    }
    />
}

export default AuthRoute;

