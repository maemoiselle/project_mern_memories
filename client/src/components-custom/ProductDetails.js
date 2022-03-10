import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  emphasize,
  fade,
  darken,
  lighten,
} from "@material-ui/core/styles/colorManipulator";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link, Redirect } from "react-router-dom";
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
import Map from "../pages/Map";

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
  const [stayOnPage, setStayOnPage] = useState(true);
  const [aisleLabel, setAisleLable] = useState("");
  const [productData, setProductData] = useState({
    itemId: "",
    itemName: "",
    price: "",
    discount: "",
    imageName: "",
    amountSaved: "",
    discountPrice: "",
    aisle: "",
    aisleImage: "",
  });
  const location = useLocation();
  const state = location.state;
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    const url = "http://localhost:8080/Item/";

    const fetchData = async (id) => {
      try {
        const response = await fetch(`${url}${id}`);
        const json = await response.json();

        const discountPrice = calculateDiscountPrice(json.price, json.discount);
        const amountSaved = calculateAmountSaved(json.price, discountPrice);
        setProductData({
          itemId: json.itemId,
          itemName: json.itemName,
          price: json.price,
          discount: json.discount,
          imageName: json.imageName,
          discountPrice: discountPrice,
          amountSaved: amountSaved,
          categoryId: json.categoryId,
          aisle: json.aisleNumber,
          aisleImage: json.aisleImageUrl,
        });
        const label = `A${json.aisleNumber}`;
        setAisleLable(label);
      } catch (error) {
        console.log("you have an error", error);
      }
    };

    fetchData(material.craftId);
  }, [material]);

  const handleAddProduct = (event) => {
    console.log("Adding the product");
    //     const requestOptions = {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', },
    //       body: JSON.stringify({ shoppingListIdReal: 1, itemId: productData.itemId, categoryId: productData.categoryId, username: location.state.username })

    //     };
    //   fetch('http://localhost:8080/AddShoppingLists', requestOptions)
    //   .then(async response => {
    //     const isJson = response.headers.get('content-type')?.includes('application/json');
    //     const data = isJson && await response.json();

    //     // check for error response
    //     if (!response.ok) {
    //         // get error message from body or default to response status
    //         const error = (data && data.message) || response.status;
    //         return Promise.reject(error);
    //     }

    // })
    //       .then(response => response.json())
  };

  const handleClick = (event) => {
    setStayOnPage(false);
  };

  if (material.craftIdReal === location.state.craftId) {
    if (productData.discount !== 0.0) {
      return (
        <Container>
          <Box mt={3}>
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
                      {productData.itemName}     .
                      <Chip
                        color="secondary"
                        label={aisleLabel}
                        onClick={handleClick}
                      />
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
                  <Box mr={1} my={2} textAlign="center">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleAddProduct()}
                    >
                      Add
                    </Button>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>
          {stayOnPage ? (
            <div></div>
          ) : (
            <Redirect
              to={{
                pathname: "/map",
                state: {
                  username: location.state.username,
                  productData: productData,
                },
              }}
            />
          )}
        </Container>
      );
    } else {
      return (
        <Container>
        <Box mt={3}></Box>
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
                    {productData.itemName}     .
                    <Chip
                      color="secondary"
                      label={aisleLabel}
                      onClick={handleClick}
                    />
                  </Typography>
                </Box>
                <Box ml={2} direction="row">
                  <Typography variant="body4">
                    ${productData.discountPrice}
                  </Typography>
                </Box>
                <Box mr={1} my={2} textAlign="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddProduct()}
                  >
                    Add
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
          {stayOnPage ? (
            <div></div>
          ) : (
            <Redirect
              to={{
                pathname: "/map",
                state: {
                  username: location.state.username,
                  productData: productData,
                },
              }}
            />
          )}
        </Container>
      );
    }
  } else {
    return null;
  }
};

export default ProductDetails;
