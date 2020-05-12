import React from 'react';

import BaseField from './BaseField';


const LoginField = (props) => {

    const validate = (value) => {
        return true;
    }

    const defaultErrorMessage = "Login Inválido!";

    return (
        <BaseField  {...props} defaultErrorMessage={defaultErrorMessage} validate={validate}/>
    )

}

export default LoginField;