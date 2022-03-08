import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";


const useStyles = makeStyles((theme) => ({
  media: {
    height: '100px'
  },
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
<section>
  <Box pt={8} pb={10}>
    <Container maxWidth="md">
      <Box textAlign="center">
        <Grid container spacing={4}>
          <Grid item xs={6} md={6}>
            <Card>
              <CardActionArea href="#">
                <CardMedia className={classes.media} image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" />
                <h5>Soft Pastels by Artist's Loft</h5>
                <h4>$5.99</h4>
                <Button size="small" color="primary" variant="contained">Button</Button>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} md={6}>
            <Card>
              <CardActionArea href="#">
                <CardMedia className={classes.media} image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" />
                <h5>Oil Pastels by Artist's Loft Fundamentals</h5>
                <h4>$5.99</h4>
                <Button size="small" color="primary" variant="contained">Button</Button>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </Box>
</section>
  );
}