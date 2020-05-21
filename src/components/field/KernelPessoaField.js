import React from 'react';

import BaseField from './BaseField';


const KernelPessoaField = (props) => {

    const validate = (value) => {
        return true;
    }

    const defaultErrorMessage = "Pessoa Inválida!";

    return (
        <BaseField  {...props} defaultErrorMessage={defaultErrorMessage} validate={validate}/>
    )

}

export default KernelPessoaField;