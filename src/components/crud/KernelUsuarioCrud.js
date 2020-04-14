import React from 'react';

import { layoutStyles } from './styles';
import KernelCrud from './KernelCrud';

import {load, save, remove} from '../../services/usuario';

import {columns} from '../../services/gui';


const KernelUsuarioCrud = () => {

  const classes = layoutStyles();

  return (
      <KernelCrud coluns={columns} doLoad={load} doSave={save} doRemove={remove} />
  )

}

export default KernelUsuarioCrud;