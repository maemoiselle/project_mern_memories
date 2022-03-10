import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import SignIn from '../components-custom/SignIn';
import Logo from '../images/logoRedSlogan.svg';

export default function Login() {


  return (
    <React.Fragment>
    <Box mt={10} mx={5}>
    <img src={Logo}></img>
    </Box>
      <SignIn />
    </React.Fragment>
  );
}

