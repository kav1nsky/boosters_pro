import React from 'react';
import {Route, Switch} from 'react-router';
import {withRouter} from 'react-router';

import {MainPage} from "../views/main";
import {LoginPage} from "../views/login";
import {RegistrationPage} from "../views/registration";


const MainRouter = () => (
    <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/registration' component={RegistrationPage}/>
    </Switch>
);


export default withRouter(MainRouter);
