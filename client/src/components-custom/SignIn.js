import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
  emphasize,
  fade,
  darken,
  lighten,
} from "@material-ui/core/styles/colorManipulator";
import { Redirect } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts';
import Posts from '../components/Posts/Posts';



import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";

const useStyles = makeStyles((theme) => ({
  tertiaryAction: {
    [theme.breakpoints.up("sm")]: {
      textAlign: "right",
    },
  },
  actions: {
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function Component(props) {
  const [username, setUsername] = React.useState("");
  const [notLoggedIn, setNotLoggedIn] = useState(true);
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const classes = useStyles();

  const handleLogin = (event) => {

    if (username === "alipatri") {
      //dispatch(getPosts(1));
      setNotLoggedIn(false);
    } else {
      
    }

  };


  return (
    <section>
      <Container maxWidth="xs">
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Box pt={8} pb={10}>
          <Box mx={3} mb={6} textAlign="center">
            <Link href="#" variant="h4" color="inherit" underline="none">
              <img
                src="mui-assets/img/logo-pied-piper-icon.png"
                alt=""
                width="40"
              />
            </Link>
          </Box>
          <Box mx={3} mb={3} textAlign="left">
            <Typography variant="h5" component="h2">
              Sign in
            </Typography>
          </Box>
          <Box mx={3}>
            <form noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField variant="outlined" required fullWidth name="username" id="username" label="Username" onInput={ e =>setUsername(e.target.value)} />
                </Grid>
              </Grid>
              <Box my={3}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => handleLogin()}
                >
                  Continue
                </Button>
              </Box>
              <Box textAlign="center" mx={3}>
                <Link href="#" variant="body2" color="textPrimary">
                  Forgot username?
                </Link>
              </Box>
            </form>
            <Box mt={15}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="default"
              >
                Create an Account
              </Button>
            </Box>
          </Box>
        </Box>
        </Grid>
      </Container>
      {notLoggedIn ? <div></div> : <Redirect to={{ pathname: "/Product", state: { username: {username}} }}/>}
    </section>
  );
}
