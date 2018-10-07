import React from 'react';

import {Header} from "../../components/header";
import {LoginFullPage} from "../../components/loginFullPage/index";
import { views } from "../../constans/views";


export const LoginPage = () => (
    <div>
        <Header page={views.LOGIN_PAGE}/>
        <LoginFullPage/>
    </div>
);