import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme/theme';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Router>
  <ThemeProvider theme={theme}>
  <Provider store={store}>
    <App />
  </Provider>
  </ThemeProvider>
  </Router>,
  document.getElementById('root'),
);
