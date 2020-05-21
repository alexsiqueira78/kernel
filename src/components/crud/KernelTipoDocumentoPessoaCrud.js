import React from 'react';

import KernelCrud from './KernelCrud';
import { save, remove, load } from '../../services/crud';
import { tipodocumentopessoa } from '../../services/gui';
import CodigoField from '../field/CodigoField';
import KernelDescricaoField from '../field/KernelDescricaoField';

const KernelTipoDocumentoPessoaCrud = () => {

  return (
    <KernelCrud path={tipodocumentopessoa.path} title={tipodocumentopessoa.title} columns={tipodocumentopessoa.columns} doLoad={load} doSave={save} doRemove={remove}>
      <CodigoField id="codigo" label="Código" placeholder="Código" helperText="Somente letras" required={true} disabled={false} ></CodigoField>
      <KernelDescricaoField id="descricao" label="Descrição" placeholder="Descrição" helperText="Somente letras" required={true} disabled={false} ></KernelDescricaoField>
    </KernelCrud>
  )

}

export default KernelTipoDocumentoPessoaCrud;