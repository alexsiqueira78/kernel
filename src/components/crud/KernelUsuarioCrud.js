import React from 'react';

import KernelCrud from './KernelCrud';

import { load, save, remove } from '../../services/usuario';

import { columns } from '../../services/gui';

import NomeField from './../field/NomeField';
import LoginField from './../field/LoginField';
import CodigoField from './../field/CodigoField';


import Typography from '@material-ui/core/Typography';

const KernelUsuarioCrud = () => {

  return (
    <KernelCrud columns={columns} doLoad={load} doSave={save} doRemove={remove}>
      <CodigoField id="codigo" label="Código" placeholder="Código do Usuário" helperText="Somente letras" required={true} disabled={false} ></CodigoField>
      <NomeField id="nome" label="Nome" placeholder="Nome do Usuário" helperText="Somente letras" required={true} disabled={false} ></NomeField>
      <LoginField id="login" label="Login" placeholder="Login do Usuário" helperText="Somente letras" required={true} disabled={false} ></LoginField>
      <LoginField id="password" label="Senha" placeholder="Login do Usuário" helperText="Somente letras" required={true} disabled={false} ></LoginField>
    </KernelCrud>
  )

}

export default KernelUsuarioCrud;