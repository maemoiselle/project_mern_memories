import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  emphasize,
  fade,
  darken,
  lighten,
} from "@material-ui/core/styles/colorManipulator";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";
import Posts from "../components/Posts/Posts";

import Craftskill from "../pages/Craftskill";
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
import { checkValue } from "../utils/arrayUtils";

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
  const [status, setStatus] = useState(false)
  const [username, setUsername] = React.useState("");
  const [notLoggedIn, setNotLoggedIn] = useState(true);
  const [currentId, setCurrentId] = useState(0);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [usernames, setUsernames] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = "http://localhost:8080/AllUsers/";

    const fetchData = async (id) => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const allUsers = json.map((item) => ({
          username: item.username,
          shoppingListId: item.shoppingListId,
          userId: item.userId,
        }));
        setUsers(allUsers);
        const usernameArr = json.map((item) => (item.username));
        setUsernames(usernameArr)
      } catch (error) {
        console.log("you have an error", error);
      }
    };

    fetchData();
  }, []);

  const classes = useStyles();

  const handleLogin = (event) => {
    const index = users.map(object => object.username).indexOf(username);
    const thisUser = {username: users[index].username, shoppingListId: users[index].shoppingListId, userId: users[index].userId};
    setUser(thisUser)
    const stat = checkValue(username, usernames);

    setStatus(stat);
    if (status) {
      setNotLoggedIn(false);
    } else {
    }
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
    console.log(username)

  };

  return (
    <section>
      <Container maxWidth="xs">
          <Box mt={5}>
            <Box mx={3} mb={3} textAlign="left">
              <Typography variant="h5" component="h2">
                Sign in
              </Typography>
            </Box>
            <Box mx={3}>
              <form noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                  <FormControl variant="standard" fullWidth>
                  <InputLabel id="user-select">Username</InputLabel>
                  <Select
                    labelId="user-select"
                    id="user-select"
                    value={username}
                    onChange={handleChange}
                    label="Username"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {usernames.map(username => {
                      return (
                        <MenuItem key={username} value={username}>
                          {username}
                        </MenuItem>
                      )
            })}
                  </Select>
                </FormControl>
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
      </Container>
      {notLoggedIn ? (
        <div></div>
      ) : (
        <Redirect
          to={{ pathname: "/home", state: { username: username, shoppingListId: user.shoppingListId } }}
        />
      )}
    </section>
  );
}
