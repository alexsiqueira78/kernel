import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import { useStyles } from './styles';

const KernelSaveButton = (props) => {

  const classes = useStyles();

  return (
      <Button onClick={props.onClick}>
        <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
        Salvar
      </Button>

  );

}

export default KernelSaveButton;



