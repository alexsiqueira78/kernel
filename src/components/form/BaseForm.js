import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import KernelSaveButton from './../button/KernelSaveButton';
import KernelCancelButton from './../button/KernelCancelButton';
import { layoutStyles } from '../styles';


const BaseForm = (props) => {

    const classes = layoutStyles();
    const [fullWidth, setFullWidth] = React.useState(true);    
    const [maxWidth, setMaxWidth] = React.useState('sm');
    

    const [data, setData] = React.useState([]
    );

    const handleSave = () => {
        props.onSave(data);
    };

    const handleEntered = () => {
        children.map(item => {
            data[item.props.id] = item.props.value;
        })
    }

    const handleChange = (name, value) => {
        setData({ ...data, [name]: value });
    };

    const children = React.Children.map(props.children, function (child) {
        if (React.isValidElement(child)) {
            const propsAnother = {
                onChange: handleChange,
                editing: props.editing
            }
            if (props.data[child.props.id]) {
                propsAnother.value = props.data[child.props.id];
            }
            const element = React.cloneElement(child, { ...propsAnother })
            return element
        }
    });

    const theme = useTheme();
    
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <React.Fragment>
            <Dialog
                open={props.open}
                disableBackdropClick="true"
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                onClose={props.onClose}
                onEntered={handleEntered}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
                <DialogContent className={classes.baseForm} >
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

