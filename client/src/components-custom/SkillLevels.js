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


const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: '100%',
  },
}
));


const SkillLevels = ({ setCurrentId, level, difficulty }) => {
  const crafts = useSelector((state) => state.crafts);
  const classes = useStyles();

 

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
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt="" className={classes.image} />
              <Typography variant="body1" gutterBottom={true}>[Category]</Typography>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={4} md={4}>
          <Card classes={classes.skillCard}>
            <CardActionArea href="">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt="" className={classes.image} />
              <Typography variant="body1" gutterBottom={true}>[Category]</Typography>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4} md={4}>
          <Card classes={classes.skillCard}>
            <CardActionArea href="">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt="" className={classes.image} />
              <Typography variant="body1" gutterBottom={true}>[Category]</Typography>
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
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt="" className={classes.image} />
              <Box pl={2}>
                <Typography variant="body1" gutterBottom={true}>[Craft Name]</Typography>
              </Box>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={6} md={6}>
          <Card classes={classes.skillCard}>
            <CardActionArea href="">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt="" className={classes.image} />
              <Box pl={2}>
                <Typography variant="body1" gutterBottom={true}>[Craft Name]</Typography>
              </Box>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
    <Box pb={1} pt={2} textAlign="left">
      <Typography variant="h5" gutterBottom={true}>Explore Trending Crafts</Typography>
    </Box>
    <Box pb={3} textAlign="left">
  
      {crafts.map((craft) => (
        <Grid key={craft._id} item xs={12} sm={12} md={12}>
            <Craft craft={craft} setCurrentId={setCurrentId} difficulty={difficulty} />
          </Grid>
      ))}
    </Box>
    <Box textAlign="center">
      <Button href="#" color="primary">See all {level} crafts</Button>
    </Box>
  </Container>
</section>

  );
}

export default SkillLevels;