import React from 'react';

import {Header} from "../../components/header";
import {RegistrationFullPage} from "../../components/registrationFullPage/index"
import { views } from "../../constans/views";

export const RegistrationPage = () => (
    <div>
        <Header page={views.REGISTRATION_PAGE}/>
        <RegistrationFullPage/>
    </div>
);