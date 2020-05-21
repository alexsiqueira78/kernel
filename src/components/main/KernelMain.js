import React from 'react';
import KernelEmpregadoCrud from './../crud/KernelEmpregadoCrud';
import KernelUsuarioCrud from './../crud/KernelUsuarioCrud';
import KernelEmpresaCrud from './../crud/KernelEmpresaCrud';
import KernelPessoaCrud from './../crud/KernelPessoaCrud';
import KernelTipoDocumentoEmpresaCrud from './../crud/KernelTipoDocumentoEmpresaCrud';
import KernelTipoDocumentoPessoaCrud from './../crud/KernelTipoDocumentoPessoaCrud';

const KernelMain = (props) => {

    return (
        <React.Fragment>
            {props.menu === "mnUSUARIO" && <KernelUsuarioCrud />}
            {props.menu === "mnEMPRESA" && <KernelEmpresaCrud />}
            {props.menu === "mnPESSOA" && <KernelPessoaCrud />}
            {props.menu === "mnEMPREGADO" && <KernelEmpregadoCrud />}
            {props.menu === "mnTIPODOCUMENTOEMPRESA" && <KernelTipoDocumentoEmpresaCrud />}
            {props.menu === "mnTIPODOCUMENTOPESSOA" && <KernelTipoDocumentoPessoaCrud />}
        </React.Fragment>
    )

}

export default KernelMain;