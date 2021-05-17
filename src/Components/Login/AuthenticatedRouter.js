import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthenticationService from './AuthenticationService';

const AuthenticatedRouter = (props) => {

    if (AuthenticationService.isUserLoggedIn()) {
        return <Route {...props} />
    }

    else {
        return <Redirect to="/login"/>
    }




}

export default AuthenticatedRouter;