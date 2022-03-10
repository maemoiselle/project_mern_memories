import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { getCrafts } from '../actions/posts'
import Craft from '../components/Craft/craft';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import Oragami from "../images/crafts/oragami.jpg";
import Flowerpots from "../images/crafts/flowerpot.jpg";
import Stationary from "../images/crafts/stationary.jpg";
import Socks from "../images/crafts/socks.jpg";
import Blanket from "../images/crafts/blanket.jpg";
import Chip from "@material-ui/core/Chip";


const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: '100%',
  },
}
));


const SkillLevels = ({ setCurrentId, level, difficulty, username }) => {
  const crafts = useSelector((state) => state.crafts);
  const classes = useStyles();
  console.log(username)

 

  return (
<section>
  <Container maxWidth="lg">
    <Box  pt={2}>
      <Typography variant="body2" paragraph={true}>Home/Crafts by Skill/{level}</Typography>
    </Box>
    <Box pb={3} pt={2} textAlign="left">
      <Typography variant="h4" gutterBottom={true}>Explore {level} DIY Crafts for All Ages</Typography>
    </Box>
    <Box pb={3} textAlign="center">
      <Grid container spacing={2}>
        <Grid item xs={4} md={4}>
          <Card classes={classes.skillCard}>
            <CardActionArea href="">
              <img src={Stationary} alt="" className={classes.image} />
              <Typography variant="body1" gutterBottom={true}>Stationary</Typography>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={4} md={4}>
          <Card classes={classes.skillCard}>
            <CardActionArea href="">
              <img src={Oragami} alt="" className={classes.image} />
              <Typography variant="body1" gutterBottom={true}>Paper Crafts</Typography>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4} md={4}>
          <Card classes={classes.skillCard}>
            <CardActionArea href="">
              <img src={Flowerpots} alt="" className={classes.image} />
              <Typography variant="body1" gutterBottom={true}>Painting</Typography>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
    <Box pb={1} pt={2} textAlign="left">
      <Typography variant="h5" gutterBottom={true}>Try projects based on your past purchases.</Typography>
    </Box>
    <Box pb={3} textAlign="left">
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <Card classes={classes.skillCard}>
            <CardActionArea href="">
              <img src={Socks} alt="" className={classes.image} />
              <Box pl={2} pb={2}>
                <Typography variant="body1" gutterBottom={true}>Knitted Socks</Typography>
                <Chip
                        color="secondary"
                        label="Advanced"
                      />
              </Box>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={6} md={6}>
          <Card classes={classes.skillCard}>
            <CardActionArea href="">
              <img src={Blanket} alt="" className={classes.image} />
              <Box pl={2} pb={2}>
                <Typography variant="body1" gutterBottom={true}>Cozy Knit Blanket</Typography>
                <Chip
                        color="secondary"
                        label="Intermediate"
                      />
              </Box>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
    <Box pb={1} pt={2} textAlign="left">
      <Typography variant="h5" gutterBottom={true}>Explore Trending Crafts</Typography>
    </Box>
    <Box pb={3} mt={2} textAlign="left">
    <Grid container>
  
      {crafts.map((craft) => (
        <Grid key={craft._id} item xs={12} sm={12} md={12}>
            <Craft craft={craft} setCurrentId={setCurrentId} difficulty={difficulty} username={username} level={level} />
          </Grid>
      ))}
      </Grid>
    </Box>
    <Box textAlign="center" mb={2}>
      <Button href="#" color="primary">See all {level} crafts</Button>
    </Box>
  </Container>
</section>

  );
}

export default SkillLevels;