import React, { useEffect } from 'react';

import KernelTable from '../table/KernelTable';
import BaseForm from './../form/BaseForm';



const KernelCrud = (props) => {

    const [state, setState] = React.useState({
        loading: false,
        open: false,
        editing: false,
        isvalid: false,
        errormessage: "XPTOOOOOrio do Sistema Inválido!",
        selected: {},
        data: []
    });

    const handleAdd = () => {
        setState({ ...state, open: true, editing: false, selected: {} });
    }

    const handleEdit = (event, rowData) => {
        setState({ ...state, open: true, editing: true, selected: rowData });
    }

    const handleSave = (entity) => {
        setState({ ...state, open: false });
        props.doSave(props.path, entity)
            .then((response) => {
                loadData()
            })
            .catch((error) => { 
                this.setState({ "isvalid": false, "errorMessage": error })
            })
    }

    const handleDelete = (rowData) => {
        props.doRemove(props.path, rowData.codigo)
            .then((response) => {
                loadData()
            })
            .catch((error) => {
                this.setState({ "isvalid": false, "errorMessage": error })
            });
    }

    const handleClose = () => {
        setState({ ...state, open: false });
    }






    const loadData = () => {
        props.doLoad(props.path)
            .then(data => setState({ ...state, "loading": false, "data": data, open: false }))
            .catch((error) => setState({ ...state, "isvalid": false, "errormessage": error }))
        
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => loadData(), []);





    return (
        <React.Fragment>
            {state.loading && 'Loading...'}
            <KernelTable
                data={state.data}
                columns={props.columns}
                title={props.title}
                doLoad={props.doLoad}
                doAdd={handleAdd}
                doEdit={handleEdit}
                doDelete={handleDelete} />
            <BaseForm
                open={state.open}
                columns={props.columns}
                editing={state.editing}
                data={state.selected}
                onClose={handleClose}
                onSave={handleSave}
                onCancel={handleClose}
                title={props.title}>  {props.children} </BaseForm>
        </React.Fragment>
    );

}

export default KernelCrud;


