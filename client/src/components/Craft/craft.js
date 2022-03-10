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
  Chip
} from "@material-ui/core/";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { useLocation, Link } from "react-router-dom";
import Craftdetail from "../../pages/Craftdetail";

const Craft = ({
  craft,
  setCurrentId,
  difficulty,
  username,
  shoppingListId,
  level
}) => {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  console.log(username);
  const dispatch = useDispatch();
  const classes = useStyles();

  if (craft.difficultyLevel === location.state.difficulty) {
    return (
      <Box mt={2}>
        <Card className={classes.cards}>
          <Link
            to={{
              pathname: "/Craftdetail",
              state: {
                craftName: craft.craftName,
                difficulty: craft.difficultyLevel,
                craftId: craft.craftId,
                craftImg: craft.imageName,
                username: username,
                shoppingListId: location.state.shoppingListId,
              },
            }}  style={{ textDecoration: "none", color: "#666" }}
          >
          
            <CardActionArea href="">
              <img src={craft.imageName} alt="" className={classes.image} />
              <Box pl={3}>
                <Typography variant="body1" gutterBottom={true}>
                  {craft.craftName}
                </Typography>
              </Box>
              <Box p={2}>
              <Chip
          color="secondary"
          label={location.state.level}
        />
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
