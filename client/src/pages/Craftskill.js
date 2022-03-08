import React from 'react';
import { connect } from 'react-redux';

import StructureContainer from '../components/__structures/StructureContainer';
import StructureDiv from '../components/__structures/StructureDiv';
import Skills from '../components-custom/Skills';
import Navbar from '../components-custom/Navbar';

class Craftskill extends React.Component {

  render() {
  return (
    <React.Fragment>
    <Navbar/>
      <StructureContainer
        bucket1={[<StructureDiv bucket1={[<Skills />]} />]}
      />
    </React.Fragment>
  );
}
}

export default Craftskill;

