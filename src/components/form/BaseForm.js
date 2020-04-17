import React, { Fragment } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import KernelSaveButton from './../button/KernelSaveButton';
import KernelCancelButton from './../button/KernelCancelButton';
import NomeField from './../field/NomeField';

const BaseForm = (props) => {

    const [state, setState] = React.useState({
        data: []
    });

    const handleSave = () => {
        props.onSave(state.data);
    };

    const handleEntered = () => {
        console.log(handleEntered);
    }

    const handleChange = (name, value) => {
        console.log(name + ":" + value);
        //setValues({ ...values, [name]: value});
    };

    /*    
      const [values, setValues] = React.useState({
        codigo: "",
        cnpj: "",
        razaosocial: "",
      });
    */
    /*

    */
    /*   
       const handleEntered = () => {
        setValues({
            codigo: props.data.codigo,
            cnpj: props.data.cnpj,
            razaosocial: props.data.razaosocial
        });
    }
    */




    return (
        <React.Fragment>
            <Dialog
                open={props.open}
                onClose={props.onClose}
                onEntered={handleEntered}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
                <DialogContent>
                    <NomeField id="name" label="Nome" placeholder="Nome do Usuário" helperText="Somente letras" required={true} disabled={false} value={props.data.name} onChange={handleChange}></NomeField>

                </DialogContent>
                <DialogActions>
                    <KernelSaveButton onClick={handleSave} color="primary" />
                    <KernelCancelButton onClick={props.onCancel} color="primary" />
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )

}

export default BaseForm;

