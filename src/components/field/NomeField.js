import React from 'react';

import BaseField from './BaseField';


const NomeField = (props) => {

    const validate = (value) => {
        return true;
    }

    const defaultErrorMessage = "Nome Inválido!";

    return (
        <BaseField  {...props} defaultErrorMessage={defaultErrorMessage} validate={validate}/>
    )

}

export default NomeField;