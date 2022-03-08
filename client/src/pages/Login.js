import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPosts } from '../actions/posts';
import SignIn from '../components-custom/SignIn';

export default function Login() {


  return (
    <React.Fragment>
      <SignIn />
    </React.Fragment>
  );
}

