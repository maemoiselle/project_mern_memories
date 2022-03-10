import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Button, Container } from "@material-ui/core";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

export default function Map(productData, username) {
  const location = useLocation();
  const state = location.state;
  const [image, setImage] = useState();

  console.log(state);
  return (
    <React.Fragment>
      <Container>
        <Box sx={{ fontWeight: "bold" }} m={2}>
          <Typography variant="h4">In-Store-Locator</Typography>
        </Box>
        <Box textAlign="center">
          <img src={location.state.productData.aisleImage} />
        </Box>
        <Box direction="row" spacing={4} textAlign="center" display="flex" justifyContent="space-between" m={2}>
          <Button variant="outlined" color="primary">
            Back
          </Button>
          <Button variant="contained" color="primary">
            Next Aisle
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}
