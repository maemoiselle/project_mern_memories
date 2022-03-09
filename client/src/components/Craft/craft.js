import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@material-ui/core/";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { useLocation, Link } from "react-router-dom";
import Craftdetail from "../../pages/Craftdetail";


const Craft = ({ craft, setCurrentId, difficulty }) => {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  const dispatch = useDispatch();
  const classes = useStyles();

  if (craft.difficultyLevel === location.state.difficulty) {
    return (
      <Box mb={2}>
        <Card className={classes.cards}>
          <Link
            to={{
              pathname: "/Craftdetail",
              state: {
                craftName: craft.craftName,
                difficulty: craft.difficultyLevel,
                craftId: craft.craftId,
                craftImg: craft.imageName,

              },
            }}
          >
            <CardActionArea href="">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                alt=""
                className={classes.image}
              />
              <Box pl={2}>
                <Typography variant="body1" gutterBottom={true}>
                  {craft.craftName}
                </Typography>
              </Box>
            </CardActionArea>
          </Link>
        </Card>
      </Box>
    );
  } else {
    return null;
  }
};

export default Craft;
