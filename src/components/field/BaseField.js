import React from 'react';
import TextField from '@material-ui/core/TextField'; 

const BaseField = (props) => {

    const defaultErrorMessage = props.defaultErrorMessage;

    const [values, setValues] = React.useState({
        data: (props.value != null ? props.value : ''),
        isvalid: (props.value != null ? props.validate(props.value) : false)
    });

    const handleChange = event => {
        const name = event.target.id;
        const value = event.target.value;
        setValues({ ...values, "data": event.target.value, "isvalid": props.validate(value) });
        props.onChange(name, value);
    };

    const { id, label, placeholder, helperText, type } = props;

    return (
        <React.Fragment>
            <TextField
                id={id}
                label={label}
                error={values.isvalid ? null : "."}
                style={{ margin: 8 }}
                placeholder={placeholder}
                helperText={values.isvalid ? helperText : helperText + " - " + defaultErrorMessage}
                value={values.data}
                onChange={handleChange}
                margin="normal"
                disabled={props.readOnly}
                InputLabelProps={{
                    shrink: true
                }}
                type={type ? type : null}
            >               
            </TextField>        
        </React.Fragment>
    )

}

export default BaseField;
