import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import useStyles from './styles';

import { getCrafts } from '../.././actions/posts';

const Craft = ({ craft, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    
    return (
        <Grid item xs={6} md={6}>
        <Card className={classes.cards}>
            <CardActionArea href="">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt="" className={classes.image} />
              <Box pl={2}>
                <Typography variant="body1" gutterBottom={true}>{craft.craftName}</Typography>
              </Box>
            </CardActionArea>
          </Card>
          </Grid>
    );
};

export default Craft;
