import React, { useEffect }  from 'react';
import TextField from '@material-ui/core/TextField';

const BaseField = (props) => {

    const defaultErrorMessage = props.defaultErrorMessage;

    const [values, setValues] = React.useState({
        data: ( props.value != null ? props.value : ''),
        isvalid: ( props.value != null ? props.validate(props.value) : false)
    });

    //useEffect(() => props.onChange({id}, values.data), []);

    //useEffect(() => {
    //    //console.log("useEffect-> " + props.id + ":" + values.data)
    //    props.onChange(props.id, values.data)
    //}, []);





    const handleChange = event => {    
        const name = event.target.id;
        const value = event.target.value;
        setValues({ ...values, "data": event.target.value, "isvalid": props.validate(value) });
        props.onChange(name, value);
    }; 
    
    const ErrorValidationLabel = ({ txtLbl }) => (
        <label htmlFor="" style={{ color: "red" }}>
            {txtLbl}
        </label>
    );
    
    const renderValidationError = values.isvalid ? "" : <ErrorValidationLabel txtLbl={defaultErrorMessage} />; 
    
    const {id, label, placeholder, helperText, type} = props;

    return (
        <div>
            <TextField 
                id={id}
                label={label}
                style={{ margin: 8 }}
                placeholder={placeholder}
                helperText={helperText}
                value={values.data}
                onChange={handleChange}
                margin="normal"    
                InputLabelProps={{
                    shrink: true
                }}
                
                
                type={type ? type : null}
            />
            {renderValidationError}
        </div>
    )
    
}

export default BaseField;
