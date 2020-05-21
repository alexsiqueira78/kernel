import React from 'react';

import KernelCrud from './KernelCrud';
import { save, remove, load } from '../../services/crud';
import { empresa } from '../../services/gui';
import CodigoField from '../field/CodigoField';
import KernalRazaoSocialField from '../field/KernalRazaoSocialField';

const KernelEmpresaCrud = () => {

  return (
    <KernelCrud path={empresa.path} title={empresa.title} columns={empresa.columns} doLoad={load} doSave={save} doRemove={remove}>
      <CodigoField id="codigo" label="Código" placeholder="Código" helperText="Somente letras" required={true} disabled={false} ></CodigoField>
      <KernalRazaoSocialField id="razaoSocial" label="Razão Social" placeholder="Razão Social da Empresa" helperText="Somente letras" required={true} disabled={false} ></KernalRazaoSocialField>
    </KernelCrud>
  )

}

export default KernelEmpresaCrud;