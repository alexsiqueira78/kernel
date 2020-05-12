import React, { useEffect, Fragment } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import KernelSaveButton from './../button/KernelSaveButton';
import KernelCancelButton from './../button/KernelCancelButton';
import NomeField from './../field/NomeField';

const BaseForm = (props) => {

    const [data, setData] = React.useState(
        { dados: props.data }
    );

    const handleSave = () => {
        console.log("handleSave1->" + data)
        props.onSave(data);
    };

    const handleEntered = () => {
        console.log(handleEntered);
        children.map(item => {
           // handleChange([item.props.id], item.props.value);
            data[item.props.id] = item.props.value;
        })
    }

    const handleChange = (name, value) => {
        console.log("handleChange1-> " + name + ":" + value)
        setData({ ...data, [name]: value });
        console.log("handleChange1-> " + data)
    };

    const children = React.Children.map(props.children, function (child) {
        if (React.isValidElement(child)) {
            const propsAnother = {
                onChange: handleChange
            }
            if (props.data[child.props.id]) {
                propsAnother.value = props.data[child.props.id];
            }
            //handleChange(data[child.props.id],propsAnother.value)
            //data[child.props.id] = propsAnother.value;
            const element = React.cloneElement(child, { ...propsAnother })
            return element
        }
    });



    // console.log(props.data);


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
                    {children}
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

