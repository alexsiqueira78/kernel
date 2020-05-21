import React from 'react';

import { layoutStyles } from '../styles';
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
    <React.Fragment>
      <div className={classes.root}>

        <KernelNavigation navigation={menu}>
          <KernelMain/>
        </KernelNavigation>
      </div>
    </React.Fragment>
  )

}

export default KernelLayout;