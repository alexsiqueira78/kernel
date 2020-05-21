import React from 'react';

import BaseField from './BaseField';


const CodigoField = (props) => {

    const validate = (value) => {
        return true;
    }

    const defaultErrorMessage = "Código Inválido!";

    return (
        <BaseField  {...props} readOnly="true" defaultErrorMessage={defaultErrorMessage} validate={validate}/>
    )

}

export default CodigoField;