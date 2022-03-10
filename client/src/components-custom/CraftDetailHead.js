import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  emphasize,
  fade,
  darken,
  lighten,
} from "@material-ui/core/styles/colorManipulator";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import clsx from "clsx";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import StructureDiv from "../components/__structures/StructureDiv";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";

import ProductDetails from "./ProductDetails";

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: "100%",
  },
}));

export default function Component({
  setCurrentID,
  craftName,
  craftImg,
  craftId,
  difficulty,
}) {
  const location = useLocation();
  const state = location.state;
  console.log(state);

  const materials = useSelector((state) => state.materials);
  
  const classes = useStyles();
  


  return (
    <section>
      <Container maxWidth="lg">
        <Box pt={2}>
          <Typography variant="body2" paragraph={true}>
            Home/Crafts by Skill/Skill Level
          </Typography>
        </Box>
        <Box pb={2} px={1} textAlign="center">
          <img
            src={location.state.craftImg}
            alt=""
            className={classes.image}
          />
        </Box>
        <Box px={1} textAlign="left">
          <Typography variant="h4">{location.state.craftName}</Typography>
        </Box>
        <Box px={1} textAlign="left">
          <Typography variant="body1" gutterBottom={true}>
            [Skill Badge]
          </Typography>
        </Box>
        <Box textAlign="left" py={2}>
          <Button href="#" color="secondary">
            View Instructions
          </Button>
        </Box>
        <Box px={1} textAlign="left">
          <Typography variant="h5">Materials</Typography>
        </Box>
        <Box my={1} mx={1}>
          <Button fullWidth variant="contained" color="primary">
            Add all materials to shopping list
          </Button>
        </Box>
        <Box pb={1} pt={2} textAlign="left">
          <Typography variant="h5" gutterBottom={true}>
            Explore projects that use similar materials
          </Typography>
        </Box>
        <Box pb={3} textAlign="left">
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <Card classes={classes.skillCard}>
                <CardActionArea href="">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                    alt=""
                    className={classes.image}
                  />
                  <Box pl={1}>
                    <Typography variant="body1" gutterBottom={true}>
                      [Craft Name]
                    </Typography>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={6} md={6}>
              <Card classes={classes.skillCard}>
                <CardActionArea href="">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                    alt=""
                    className={classes.image}
                  />
                  <Box pl={1}>
                    <Typography variant="body1" gutterBottom={true}>
                      [Craft Name]
                    </Typography>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <StructureDiv
          bucket1={[
            <Box pb={3} textAlign="left" spacing={2}>
              {materials.map((material) => (
                <Grid key={material._id} item xs={12} sm={12} md={12} direction="row">
                  <ProductDetails
                    material={material}
                    setCurrentId={location.state.setCurrentID}
                    craftName={location.state.craftName}
                    craftImg={craftImg}
                    difficulty={difficulty}
                    craftId={craftId}
                  />
                </Grid>
              ))}
            </Box>,
          ]}
        />
        <Box textAlign="center">
      <Link to={{
        pathname: "/shoppingList",
        state: { username: location.state.username },
      }}>View my Shoppinglist</Link>
    </Box>
        ,
      </Container>
    </section>
  );
}
