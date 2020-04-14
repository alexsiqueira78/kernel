import React from 'react';
import ReactDOM from "react-dom";
import clsx from 'clsx';

import { layoutStyles } from './styles';
import KernelUsuarioCrud from '../crud/KernelUsuarioCrud';



const KernelMain = () => {

    const classes = layoutStyles();

    return (
        <div id="kernel-main">
            <div>
            Principal
            <KernelUsuarioCrud/>
            </div>
        </div>
    )

}

export default KernelMain;