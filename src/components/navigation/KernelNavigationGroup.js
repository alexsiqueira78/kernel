import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';

const KernelNavigationGroup = ({ id, title }) => {
    return (
        <ListItem key={id}>
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <a href={"#page" + id} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                <ListItemText primary={title}></ListItemText>
            </a>
        </ListItem> 
    )        
}



export default KernelNavigationGroup;