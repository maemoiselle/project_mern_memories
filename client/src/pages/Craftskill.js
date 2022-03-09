import React from 'react';
import { connect } from 'react-redux';

import StructureContainer from '../components/__structures/StructureContainer';
import StructureDiv from '../components/__structures/StructureDiv';
import Skills from '../components-custom/Skills';
import Navbar from '../components-custom/Navbar';
import { useLocation, Link } from "react-router-dom";

const Craftskill = (props) => {
  const location = useLocation();
  const state = location.state;
  console.log(state.username);
 
  return (
    <React.Fragment>
    <Navbar/>
      <StructureContainer
        bucket1={[<StructureDiv bucket1={[<Skills username = {location.state.username}/>]} />]}
      />
    </React.Fragment>
  );
}


export default Craftskill;

