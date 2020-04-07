import React from 'react';
import clsx from 'clsx';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




import { useTheme } from '@material-ui/core/styles';

import { Redirect } from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InfoIcon from '@material-ui/icons/Info';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

import { useStyles } from './styles';

import './style.css';



import { logout } from '../../services/auth';
import KernelNavigationItem from './KernelNavigationItem';
import KernelNavigationGroup from './KernelNavigationGroup';


function KernelNavigation(props) {


    const classes = useStyles();
    const theme = useTheme();
    const { navigation } = props;
    const [open, setOpen] = React.useState(true);
    const [menu, setMenu] = React.useState("NONE");
    const [exit, setExit] = React.useState(false);





    const handleChangeMenu = (menu) => {
        setMenu(menu);
    }

    const handleChangeMenuNone = () => {
        setMenu("NONE");
    }


    const handleChange = event => {
        setMenu(menu);
    }






    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }



    const handleLogout = () => {
        logout();
        setExit(true);
    }



    const renderRedirect = () => {
        if (exit) {
            return <Redirect to='/' />
        }
    }

    function createMenu(item) {
        return item.type == 'divider' ? <Divider key={item.id} /> : <KernelNavigationItem id={item.id} title={item.title} onClickMenu={() => handleChangeMenu("mnUSUARIO")} />
    }

    function childrens(itens) {
        return itens.map(function (item) {
            return createMenu(item)
        })
    }

    return (
        <React.Fragment>
            <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}> v. 1.0.4.0
                            <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                {props.navigation.map(function (item) {
                    if (item.children) {
                        return (
                            <React.Fragment>
                                <KernelNavigationGroup id={item.id} title={item.title} />
                                <div key={"div" + item.id} id={"page" + item.id} className="collapse list-unstyled-toggle">
                                    {childrens(item.children)}
                                </div>
                            </React.Fragment>
                        )

                    } else {
                        return createMenu(item)
                    }
                })}
            </Drawer>
        </React.Fragment>
    )

}


export default KernelNavigation;