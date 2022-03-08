import React from 'react';
import { useLocation, Link } from "react-router-dom";

import SkillLevels from '../components-custom/SkillLevels';
import Navbar from '../components-custom/Navbar';

const Craftbylevel = (props) => {
  const location = useLocation();
  const state = location.state;
  console.log(state);

  return (
    <React.Fragment>
    <Navbar />
      <SkillLevels level= {location.state.level}/>
    </React.Fragment>
  );
}

export default Craftbylevel;

