import React from 'react';

import { layoutStyles } from './styles';
import KernelTable from '../table/KernelTable';
import BaseForm from './../form/BaseForm';

const KernelCrud = (props) => {

   

    const classes = layoutStyles();

    const [state, setState] = React.useState({
        loading: false,
        open: false,
        editing: false,
        isvalid: false,
        errormessage: "Usuário do Sistema Inválido!",
        selected: {}
    });

    const handleAdd = () => {
        console.log("handleAdd");
        setState({ ...state, open: true, editing: false, selected: {} });
    }

    const handleEdit = (event, rowData) => {
        console.log("handleEdit");
        setState({ ...state, open: true, editing: true, selected: rowData });
    }

    const handleSave = (entity) => {
        console.log("handleSave");
        setState({ ...state, open: true });
        /*        
                props.doSave(entity)
                    .then(data => this.loadData())
                    .catch((error) => this.setState({ "isvalid": false, "errorMessage": error }))
        */
    }

    const handleDelete = (rowData) => {
        console.log("handleDelete");
        /*        
                props.doRemove(rowData.id)
                    .then(data => this.loadData())
                    .catch((error) => this.setState({ "isvalid": false, "errorMessage": error }))
        */
    }

    const handleClose = () => {
        setState({ ...state, open: false });
    }

 

    return (
        <React.Fragment>
            {state.loading && 'Loading...'}
            <KernelTable
                data={props.doLoad}
                columns={props.columns}
                title={props.title}
                doLoad={props.doLoad}
                doAdd={handleAdd}
                doEdit={handleEdit}
                doDelete={handleDelete} />
            <BaseForm
                open={state.open}
                editing={state.editing}
                data={state.selected}
                onClose={handleClose}
                onSave={handleSave}
                onCancel={handleClose}
                title={props.title} />
        </React.Fragment>
    );

}

export default KernelCrud;


