import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import PaletteRoundedIcon from '@material-ui/icons/PaletteRounded';
import MoneyOffRoundedIcon from '@material-ui/icons/MoneyOffRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  linkBrand: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    }
  },
  linkBrandSmall: {
    display: 'none',
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      display: 'inline-block',
    }
  },
  drawerContainer: {
    width: 256,
  }
}
));

export default function Component(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({ open: false });
  const [viewAccount, setViewAccount] = useState("");
  const [viewCrafts, setViewCrafts] = useState("");

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, open });
  };

  const handleSubmitAccount = (event) => {
    setViewAccount(true)
};

const handleSubmitCrafts = (event) => {
  setViewCrafts(true)
};


  return (
<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
      <MenuIcon />
    </IconButton>
    <Link href="#" variant="h5" color="inherit" underline="none" className={classes.linkBrand}>
      <img src="mui-assets/img/logo-pied-piper-white.png" alt="" width="120" />
    </Link>
    <Link href="#" variant="h5" color="inherit" underline="none" className={classes.linkBrandSmall}>
      <img src="mui-assets/img/logo-pied-piper-white-icon.png" alt="" width="32" />
    </Link>
    <IconButton color="inherit">
      <ListAltRoundedIcon />
    </IconButton>
    <IconButton color="inherit">
      <ShoppingCartRoundedIcon />
    </IconButton>
  </Toolbar>
  <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
  <div className={classes.drawerContainer}>
    <List>
      <ListItem button key="Search">
        <ListItemIcon>
          <SearchRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Search" />
      </ListItem>
      <ListItem button key="DIYCrafts" onClick={() => handleSubmitCrafts()}>
        <ListItemIcon>
          <PaletteRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="DIY Crafts" />
      </ListItem>
      <ListItem button key="Coupons">
        <ListItemIcon>
          <MoneyOffRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Coupons" />
      </ListItem>
      <ListItem button key="Cart">
        <ListItemIcon>
          <ShoppingCartRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Cart" />
      </ListItem>
      <ListItem button key="Shopping List">
        <ListItemIcon>
          <ListAltRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Shopping List" />
      </ListItem>
      <ListItem button key="Account" onClick={() => handleSubmitAccount()}>
        <ListItemIcon>
          <AccountBoxRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Account" />
      </ListItem>
    </List>
  </div>
</Drawer>
{ viewAccount ? <Redirect to="/Login"></Redirect> : <div></div>}
{ viewCrafts ? <Redirect to="/Craftskill"></Redirect> : <div></div>}
</AppBar>
  );
}