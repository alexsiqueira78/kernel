import React from 'react';

import BaseField from './BaseField';


const KernalRazaoSocialField = (props) => {

    const validate = (value) => {
        return true;
    }

    const defaultErrorMessage = "Razão Social Inválida!";

    return (
        <BaseField  {...props} defaultErrorMessage={defaultErrorMessage} validate={validate}/>
    )

}

export default KernalRazaoSocialField;