import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import IndexPage from './pages/Index.js';
import MapPage from './pages/Map.js';
import ProductPage from './pages/Product.js';
import LoginPage from './pages/Login.js';
import ShoppinglistPage from './pages/Shoppinglist.js';
import Product from './pages/Product.js';


import { getPosts } from './actions/posts';



const App = () => {

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route exact path="/map">
            <MapPage />
          </Route>
          <Route path="/product" render={(props) => <Product {...props}/>}>
            <ProductPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/shoppinglist">
            <ShoppinglistPage />
          </Route>
        </Switch>
    </Router>
  );
};

export default App;
