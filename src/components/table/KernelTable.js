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

    const handleAsking = (event, rowData) => {
        setState({ ...state, "open": true, "rowData": rowData });
    }

    const handleClose = () => {
        setState({ ...state, "open": false });
    }

    const handleConfirm = () => {
        setState({ ...state, "open": false });
        props.doDelete(state.rowData);
    }

    return (
        <React.Fragment>
            <MaterialTable
                localization={{
                    pagination: {
                        labelDisplayedRows: '{from}-{to} de {count}',
                        labelRowsSelect: 'linhas',
                        labelRowsPerPage: 'Linhas por página:',
                        firstAriaLabel: 'Primeira Página',
                        firstTooltip: 'Primeira Página',
                        previousAriaLabel: 'Página Anterior',
                        previousTooltip: 'Página Anterior',
                        nextAriaLabel: 'Próxima Página',
                        nextTooltip: 'Próxima Página',
                        lastAriaLabel: 'Última Página',
                        lastTooltip: 'Última Página',
                    },
                    toolbar: {
                        nRowsSelected: '{0} linha(s) selecionada',
                        searchTooltip: 'Pesquisar',
                        searchPlaceholder: 'Pesquisar',
                    },
                    header: {
                        actions: 'Ações'
                    },
                    body: {
                        emptyDataSourceMessage: 'Não há registros a serem exibidos',
                        filterRow: {
                            filterTooltip: 'Filtrar'
                        }
                    }
                }}
                icons={tableIcons}
                title={props.title}
                columns={props.columns}
                data={props.data}
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
                        onClick: (event, rowData) => handleAsking(event, rowData),
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
                    <Button onClick={handleConfirm} color="primary" autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )

}

export default KernelTable;