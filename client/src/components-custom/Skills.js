import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  emphasize,
  fade,
  darken,
  lighten,
} from "@material-ui/core/styles/colorManipulator";
import { useDispatch, useSelector } from "react-redux";

import clsx from "clsx";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import { getCrafts } from "../actions/posts";

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: "100%",
  },
}));

export default function Component(props) {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  const [currentId, setCurrentId] = useState(0);
  const [level, setLevel] = useState("value");
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div>
      <section>
        <Container maxWidth="lg">
          <Box pt={2}>
            <Typography variant="body2" paragraph={true}>
              Home/Crafts by Skill
            </Typography>
          </Box>
          <Box pb={3} pt={2} textAlign="left">
            <Typography variant="h4" gutterBottom={true}>
              DIY Crafts to embrace your inner artist.
            </Typography>
          </Box>
          <Box pb={2} textAlign="left">
            <Typography
              variant="body1"
              gutterBottom={true}
              color="textSecondary"
            >
              {" "}
              Browse by skill level.
            </Typography>
          </Box>
          <Grid container>
            <Grid item xs={9}>
              <Card classes={classes.skillCard}>
                <Link
                  to={{
                    pathname: "/Craftbylevel",
                    state: {
                      level: "Beginner",
                      difficulty: 1,
                      username: location.state.username,
                      shoppingListId: location.state.shoppingListId,
                    },
                  }}
                  style={{ textDecoration: 'none', color: "#489ca7" }}
                >
                  <CardActionArea onClick={(event) => setLevel("beginner")}>
                    <Box ml={2} my={1}>
                      <Typography variant="h5" gutterBottom={true}>
                        Beginner
                      </Typography>
                    </Box>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Box textAlign="right">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                  alt=""
                  className={classes.image}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={9}>
              <Card classes={classes.skillCard}>
                <Link
                  to={{
                    pathname: "/Craftbylevel",
                    state: {
                      level: "Intermediate",
                      difficulty: 2,
                      username: location.state.username,
                      shoppingListId: location.state.shoppingListId,
                    },
                  }}
                  style={{ textDecoration: 'none', color:"#3373b7"}}
                >
                  <CardActionArea onClick={(event) => setLevel("intermediate")}>
                    <Box ml={2} my={1}>
                      <Typography variant="h5" gutterBottom={true}>
                        Intermediate
                      </Typography>
                    </Box>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Box textAlign="right">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                  alt=""
                  className={classes.image}
                />
              </Box>
            </Grid>
          </Grid>
          <Box>
            <Grid container>
              <Grid item xs={9}>
                <Card classes={classes.skillCard}>
                  <Link
                    to={{
                      pathname: "/Craftbylevel",
                      state: {
                        level: "Advanced",
                        difficulty: 3,
                        username: location.state.username,
                        shoppingListId: location.state.shoppingListId,
                      },
                    }}
                    style={{ textDecoration: 'none', color: "#CF202F" }}
                  >
                    <CardActionArea onClick={(event) => setLevel("advanced")}>
                      <Box ml={2} my={1}>
                        <Typography variant="h5" gutterBottom={true}>
                          Advanced
                        </Typography>
                      </Box>
                    </CardActionArea>
                  </Link>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Box textAlign="right">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                    alt=""
                    className={classes.image}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box pt={2} textAlign="center">
            <Button href="#" color="primary">
              See More
            </Button>
          </Box>
        </Container>
      </section>
    </div>
  );
}
