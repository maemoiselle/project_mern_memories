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

import ListDetails from "./ListDetails";

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
  const [listData, setListData] = useState([])
  const [items, setItems] = useState([])
  const [imgLink, setImgLink] = useState(
    `../images/craftImages/${location.state.craftImg}.png`
  );
  const materials = useSelector((state) => state.materials);
  
  const classes = useStyles();
  
  useEffect(() => {
    const url = "http://localhost:8080/AllShoppingLists";


    const fetchData = async (id) => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const allProducts = json.map((item) => ({
            itemId: item.itemId,
            shoppingListId: item.shoppingListIdReal,
            username: item.username,
            categoryId: item.categoryId
          }));
          setListData(allProducts);
          const itemIdArr = json.map((item) => (item.itemId));
          setItems(itemIdArr)
      } catch (error) {
        console.log("you have an error", error);
      }
    };

    fetchData();
  }, []);


  return (
    <section>
      <Container maxWidth="lg">
        <Box pt={2}>
          <Typography variant="body2" paragraph={true}>
            Home/Shoppinglist
          </Typography>
        </Box>
        <Box pb={3} pt={2} textAlign="left">
        <Typography variant="h2" gutterBottom={true}>Shopping List</Typography>
      </Box>
        <Button color="secondary" variant="outlined">Invite Others</Button>
        <StructureDiv
          bucket1={[
            <Box pb={3} textAlign="left" spacing={2}>
              {materials.map((material) => (
                <Grid key={material._id} item xs={12} sm={12} md={12} direction="row">
                  <ListDetails
                  items= {items}
                  />
                </Grid>
              ))}
            </Box>,
          ]}
        />
        ,
      </Container>
    </section>
  );
}
