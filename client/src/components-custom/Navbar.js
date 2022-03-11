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
import TextField from "@material-ui/core/TextField";
import { InputBase } from '@material-ui/core';
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
import Logo from "../images/Michaels_Logo_White.svg";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    flexWrap: 'wrap',
  },
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
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor:"#fff",
    '&:hover': {
      backgroundColor: (theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginBottom: 4,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    paddingBottom: 2,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
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
  <Toolbar className={classes.toolbar}>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
      <MenuIcon />
    </IconButton>
    <Link href="#" variant="h5" color="inherit" underline="none" className={classes.linkBrandSmall}>
      <img src={Logo} alt="" width="80" />
    </Link>
    <IconButton color="inherit">
      <ListAltRoundedIcon />
    </IconButton>
    <IconButton color="inherit">
      <ShoppingCartRoundedIcon />
    </IconButton>
    <div className={classes.search}>
          <div className={classes.searchIcon}>
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
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
{ viewAccount ? <Redirect to="/"></Redirect> : <div></div>}
{ viewCrafts ? <Redirect to={{ pathname: "/craftskill", state: { username: 'alipatri', shoppingListId: 1 } }}></Redirect> : <div></div>}
</AppBar>
  );
}