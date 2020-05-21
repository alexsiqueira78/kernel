import React from 'react';

import BaseField from './BaseField';


const KernelDescricaoField = (props) => {

    const validate = (value) => {
        return true;
    }

    const defaultErrorMessage = "Descrição Inválida";

    return (
        <BaseField  {...props} defaultErrorMessage={defaultErrorMessage} validate={validate}/>
    )

}

export default KernelDescricaoField;