import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import { layoutStyles } from '../styles';

const KernelSaveButton = (props) => {

  const classes = layoutStyles();

  return (
      <Button onClick={props.onClick}>
        <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
        Salvar
      </Button>

  );

}

export default KernelSaveButton;



