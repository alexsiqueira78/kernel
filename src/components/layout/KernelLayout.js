import React from 'react';
import clsx from 'clsx';

import { layoutStyles } from './styles';
import KernelToolBar from './../bar/KernelToolBar';
import KernelNavigation from './../navigation/KernelNavigation';
import KernelMain from '../main/KernelMain';




const KernelLayout = () => {

    const classes = layoutStyles();

    const menu = [
        {
          'id': 'applications',
          'title': 'Applications',
          'type': 'group', // group, collapse, link
          'icon': 'apps',
          'url': '/apps/calendar', //optional
          'children': [
            {
              'id': 'calendar',
              'title': 'Calendar',
              'type': 'item',
              'icon': 'today',
              'url': '/apps/calendar'
            },
            {
              'id': 'divider1',
              'title': 'xxxx',
              'type': 'divider'
            },
            {
              'id': 'project',
              'title': 'Project',
              'type': 'item',
              'url': '/apps/dashboards/project'
            }
          ]
        },
    
        {
          'id': 'cadastro',
          'title': 'Principal',
          'type': 'group',
          'icon': 'apps',
          'children': [
            {
              'id': 'empresa',
              'title': 'Empresa',
              'type': 'item',
              'icon': 'today',
              'url': '/app/empresa'
            },
            {
              'id': 'rep',
              'title': 'REP',
              'type': 'item',
              'url': '/app/rep'
            },
            {
              'id': 'empregado',
              'title': 'Empregado',
              'type': 'item',
              'url': '/app/empregado'
            }
          ]
        },
    
      ];    

    return (
        <div id="fuse-layout" className={clsx(classes.jss2, classes.jss1)}>b
            <div className={clsx(classes.flex)}>c
                <div className={classes.jss3}>d
                    <div id="fuse-navbar" className={classes.jss6}>
                        <KernelNavigation navigation={menu}/>
                        <KernelMain/>
                       
                    </div>
                    <div className={classes.jss4}>
                        <KernelToolBar/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default KernelLayout;