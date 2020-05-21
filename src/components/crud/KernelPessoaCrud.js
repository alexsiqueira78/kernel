import React from 'react';

import KernelCrud from './KernelCrud';
import { save, remove, load } from '../../services/crud';
import { pessoaTitle, pessoaColumns } from '../../services/gui';
import CodigoField from '../field/CodigoField';
import NomeField from '../field/NomeField';

const KernelPessoaCrud = () => {

  const path = "pessoa"

  return (
    <KernelCrud path={path} title={pessoaTitle} columns={pessoaColumns} doLoad={load} doSave={save} doRemove={remove}>
      <CodigoField id="codigo" label="Código" placeholder="Código" helperText="Somente letras" required={true} disabled={false} ></CodigoField>
      <NomeField id="nome" label="Nome" placeholder="Nome da Pessoa" helperText="Somente letras" required={true} disabled={false} ></NomeField>
    </KernelCrud>
  )

}

export default KernelPessoaCrud;