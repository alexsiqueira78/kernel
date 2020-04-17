import React, { useEffect } from 'react';
import MaterialTable from "material-table";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { tableIcons } from '../../assets/tableIcons';


const KernelTable = (props) => {

    const [state, setState] = React.useState({
        open: false,
        loading: false, 
        data: [],
        isvalid: false,
        errormessage: "",
      });

    const loadData = () => {
        props.doLoad()
            .then(data => setState({ ...state, "loading": false, "data": data}))
            .catch((error) => setState({ ...state, "isvalid": false, "errormessage": error }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    useEffect(() => loadData(), []);

    const handleAsking = (event, rowData) => {
        console.log("handleAsking");
        setState({ ...state, "open": true, "rowData": rowData });
    }
    
    const handleClose = () => {
        console.log("handleClose");
        setState({ ...state, "open": false });
    }
    
    const handleSave = () => {
        console.log("handleSave");
        setState({ ...state, "open": false });
        props.doDelete(state.rowData); 
    }

    return (
        <React.Fragment>
            <MaterialTable
                icons={tableIcons}
                title={props.title}
                columns={props.columns}
                data={state.data} 
                actions={[
                    {
                        icon: tableIcons.Add,
                        tooltip: 'Incluir Registro',
                        isFreeAction: true,
                        onClick: props.doAdd
                    },
                    {
                        icon: tableIcons.Edit,
                        tooltip: 'Alterar Registro',
                        onClick: props.doEdit
                    },
                    rowData => ({
                        icon: tableIcons.Delete,
                        tooltip: 'Excluir Registro',
                        onClick: { handleAsking },
                        disabled: rowData.delete === false
                    })
                ]}

            />
            <Dialog
                open={state.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Confirmar a exclusão do registro?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleSave} color="primary" autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )

}

export default KernelTable;