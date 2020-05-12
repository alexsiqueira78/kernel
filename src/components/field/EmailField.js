import React from 'react';

import BaseField from './BaseField';


const EmailField = (props) => {

    const validate = (value) => {
        return true;
    }

    const defaultErrorMessage = "Email Inválido!";

    return (
        <BaseField  {...props} defaultErrorMessage={defaultErrorMessage} validate={validate}/>
    )

}

export default EmailField;