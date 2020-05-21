import React from 'react';

import KernelCrud from './KernelCrud';
import { save, remove, load } from '../../services/crud';
import { empregado } from '../../services/gui';
import CodigoField from '../field/CodigoField';
import KernelPessoaField from '../field/KernelPessoaField';
import KernelEmpresaField from '../field/KernelEmpresaField';
import KernelMatriculaField from '../field/KernelMatriculaField';


const KernelEmpregadoCrud = () => {

  return (
    <KernelCrud path={empregado.path} title={empregado.title} columns={empregado.columns} doLoad={load} doSave={save} doRemove={remove}>
      <CodigoField id="codigo" label="Código" placeholder="Código" helperText="Somente letras" required={true} disabled={false} ></CodigoField>
      <KernelPessoaField id="pessoa" label="Pessoa" placeholder="Pessoa" helperText="Somente letras" required={true} disabled={false} ></KernelPessoaField>
      <KernelEmpresaField id="empresa" label="Empresa" placeholder="Empresa" helperText="Somente letras" required={true} disabled={false} ></KernelEmpresaField>
      <KernelMatriculaField id="matricula" label="Matrícula" placeholder="Matrícula" helperText="Somente letras" required={true} disabled={false} ></KernelMatriculaField>
    </KernelCrud>
  )

}

export default KernelEmpregadoCrud;