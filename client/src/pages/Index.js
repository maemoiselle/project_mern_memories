import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Button, Select, Link, Box, Grid, FormControl, InputLabel, Card, CardMedia, Avatar } from '@material-ui/core';
import Navbar from '../components-custom/Navbar';
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import Vinyl from "../images/Home/Michaels_Vinyl.png";
import Jewelry from "../images/Home/4_Jewelry.png"
import Apparel from "../images/Home/2_Apparel.png";
import Yarn from "../images/Home/3_Yarn.png";
import Ad from "../images/Home/DIYProjectsGraphic.svg";
import Weekly from "../images/Home/WeeklyAd.png";
import Bogo from "../images/Home/Michaels_BOGO.png";
import FlowerAd from "../images/Home/Michaels_Flowers.png";



const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: '100%',
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(2)
  },
}
));


export default function Index() {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />
      <Box mt={3}>
      <Typography variant="h4" gutterBottom={true}>Welcome Back!</Typography>
      </Box>
      <Typography variant="subtitle1" gutterBottom={true}>How are you shopping today?</Typography>
      <Grid container>
      <Grid item xs={4}>
      <FormControl variant="standard" fullWidth color="primary">
      <InputLabel>In-Store</InputLabel>
      <Select ></Select>
      </FormControl>
      </Grid>
      </Grid>
      <Box mt={2}>
      <Grid container spacing={4}>
        <Grid item xs={6} lg={6}>
          <Typography color="primary">At MY STORE</Typography>
          <Typography>Arlington, 22202</Typography>
          <Link color="secondary">Change</Link>
        </Grid>
        <Grid item xs={6} lg={6}>
          <Link color="secondary">Store Info</Link>
          <Box mb={3}></Box>
          <Link color="secondary">Store Map</Link>
        </Grid>
      </Grid>
      </Box>
      <Box mt={4}>
      <Card>
      <CardMedia component="img" image={Vinyl}/>
      </Card>
      </Box>
      <Box pb={2} pt={2} textAlign="left">
      <Typography variant="h5" gutterBottom={true}>Browse by Category</Typography>
    </Box>
    <Box pb={3} textAlign="center">
      <Grid container spacing={2}>
        <Grid item xs={4} md={4}>

              <Avatar src={Jewelry} alt="" className={classes.avatar} />
              <Typography variant="body1" gutterBottom={true}>Jewelry</Typography>

        </Grid>

        <Grid item xs={4} md={4}>
  
              <Avatar src={Apparel} alt="" className={classes.avatar} />
              <Typography variant="body1" gutterBottom={true}>Apparel</Typography>

        </Grid>
        <Grid item xs={4} md={4}>

              <Avatar src={Yarn} alt="" className={classes.avatar} />
              <Typography variant="body1" gutterBottom={true}>Yarn</Typography>

        </Grid>
      </Grid>
      </Box>
      <Card>
      <CardMedia component="img" image={Ad}/>
      </Card>
      <Box pb={1} pt={3} textAlign="left">
      <Typography variant="h5" gutterBottom={true}>Coupons, Deals & More</Typography>
    </Box>
    <Box mb={4}>
    <Grid container>
    <Grid item xs={4}>
    <Card>
      <CardMedia component="img" image={Weekly}/>
      </Card>
    </Grid>
    <Grid item xs={4}>
    <Card>
      <CardMedia component="img" image={Bogo}/>
      </Card>
    </Grid>
    <Grid item xs={4}>
    <Card>
      <CardMedia component="img" image={FlowerAd}/>
      </Card>
    </Grid>
    </Grid>
    </Box>
    </React.Fragment>
    
  );
}

