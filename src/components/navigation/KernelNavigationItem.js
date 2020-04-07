import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';

const KernelNavigationItem = ({ id, title, onClickMenu }) => {
    return (
        <ListItem button key={id} onClick={onClickMenu}>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary={title} />
        </ListItem>
    )
}

export default KernelNavigationItem;