import React from 'react';

import BaseField from './BaseField';


const KernelMatriculaField = (props) => {

    const validate = (value) => {
        return true;
    }

    const defaultErrorMessage = "Matricula Inválida!";

    return (
        <BaseField  {...props} readOnly="true" defaultErrorMessage={defaultErrorMessage} validate={validate}/>
    )

}

export default KernelMatriculaField;