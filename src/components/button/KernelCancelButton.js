import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import CancelIcon from  '@material-ui/icons/Cancel';

import { useStyles } from './styles';

const KernelCancelButton = (props) => {

    const classes = useStyles();
  
    return (
        <Button onClick={props.onClick}>
          <CancelIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
          Cancelar
        </Button>

    );

}

export default KernelCancelButton;