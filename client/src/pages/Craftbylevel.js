import React, { useState, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";

import SkillLevels from '../components-custom/SkillLevels';
import Navbar from '../components-custom/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getCrafts } from '../actions/posts';

const Craftbylevel = (props) => {
  
  const [currentId, setCurrentId] = useState(0);
  const location = useLocation();
  const state = location.state;
  console.log(state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCrafts());

  },[currentId, dispatch]);

  return (
    <React.Fragment>
    <Navbar />
      <SkillLevels level= {location.state.level} setCurrentId={setCurrentId} username= {location.state.username}/>
    </React.Fragment>
  );
}

export default Craftbylevel;

