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
import axios from "axios";
import clsx from "clsx";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import CardMedia from "@material-ui/core/CardMedia";

import {
  calculateDiscountPrice,
  calculateAmountSaved,
} from "../utils/discount";

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
  const [productData, setProductData] = useState({
    itemId: "",
    itemName: "",
    price: "",
    discount: "",
    imageName: "",
    amountSaved: "",
    discountPrice: "",
  });
  const location = useLocation();
  const state = location.state;
  console.log(state);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    const url = "http://localhost:8080/Item/";

    const fetchData = async (id) => {
      try {
        const response = await fetch(`${url}${id}`);
        const json = await response.json();

        const discountPrice = calculateDiscountPrice(json.price, json.discount);
        const amountSaved = calculateAmountSaved(json.price, discountPrice)
        setProductData({
          itemId: json.itemId,
          itemName: json.itemName,
          price: json.price,
          discount: json.discount,
          imageName: json.imageName,
          discountPrice: discountPrice,
          amountSaved: amountSaved,
        });
      } catch (error) {
        console.log("you have an error", error);
      }
    };

    fetchData(material.craftId);
  }, [material]);

  if (material.craftIdReal === location.state.craftId) {
    if (productData.discount !== 0.00) {
      return (
        <Container>
          <Box>
            <Grid container>
              <Grid item xs={12} md={3}>
                <Card classes={classes.skillCard}>
                <CardMedia
                component="img"
                image={productData.imageName}
                alt=""
                className={classes.image}
                />
                  <Box ml={2} direction="row">
                    <Typography variant="subtitle1">
                      {productData.itemName}
                      <Chip color="secondary" label="A3" />
                    </Typography>
                  </Box>
                  <Box ml={2} direction="row">
                    <Typography variant="body4">
                      ${productData.discountPrice} /
                    </Typography>
                    <Typography variant="overline">
                      Compare to: ${productData.price}
                    </Typography>
                  </Box>
                  <Box ml={2}>
                    <Typography variant="body4">
                      You save: ${productData.amountSaved}
                    </Typography>
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
      return (
            <Grid container>
              <Grid item xs={12} md={3}>
                <Card classes={classes.skillCard}>
                <CardMedia
                component="img"
                image={productData.imageName}
                alt=""
                className={classes.image}
                />
                  <Box ml={2} direction="row">
                    <Typography variant="subtitle1">
                      {productData.itemName}
                      <Chip color="secondary" label="A3" />
                    </Typography>
                  </Box>
                  <Box ml={2} direction="row">
                    <Typography variant="body4">
                      ${productData.discountPrice}
                    </Typography>
                  </Box>
                  <Box mr={1} mb={1} textAlign="center">
                    <Button variant="contained" color="primary">
                      Add
                    </Button>
                  </Box>
                </Card>
              </Grid>
            </Grid>
      );
    }
  } else {
    return null;
  }
};

export default ProductDetails;
