import React from 'react';

import BaseField from './BaseField';


const KernelEmpresaField = (props) => {

    const validate = (value) => {
        return true;
    }

    const defaultErrorMessage = "Empresa Inválida!";

    return (
        <BaseField  {...props} defaultErrorMessage={defaultErrorMessage} validate={validate}/>
    )

}

export default KernelEmpresaField;