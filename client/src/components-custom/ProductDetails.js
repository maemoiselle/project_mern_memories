import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  emphasize,
  fade,
  darken,
  lighten,
} from "@material-ui/core/styles/colorManipulator";
import { useDispatch } from "react-redux";
import { useLocation, Link } from "react-router-dom";

import clsx from "clsx";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: "100%",
  },
}));

const ProductDetails = ({
  material,
  setCurrentId,
  craftName,
  craftImg,
  difficulty,
  craftId,
}) => {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  const dispatch = useDispatch();
  const classes = useStyles();

  if (material.craftIdReal === location.state.craftId) {
    
    return (
      <Container>
        <Box>
          <Grid container>
            <Grid item xs={4}>
              <Box textAlign="left">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                  alt=""
                  className={classes.image}
                />
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Card classes={classes.skillCard}>
                <Box ml={2}>
                  <Typography variant="body2">{material.craftId}</Typography>
                </Box>
                <Box ml={3} my={1}>
                  <Typography variant="body3">[A3]</Typography>
                </Box>
                <Box ml={2} my={1}>
                  <Typography variant="body4">[$Price] [$OGPrice]</Typography>
                </Box>
                <Box ml={2} my={1}>
                  <Typography variant="body4">You save: [$Saved]</Typography>
                </Box>
                <Box mr={1} mb={1} textAlign="center">
                  <Button variant="contained" color="primary">
                    Add
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  } else {
    return null;
  }
};

export default ProductDetails;
