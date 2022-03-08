import React from 'react';

import StructureDiv from '../components/__structures/StructureDiv';
import Navbar from '../components-custom/Navbar';
import CraftDetailHead from '../components-custom/CraftDetailHead';
import ProductDetails from '../components-custom/ProductDetails';

class Craftdetail extends React.Component {

  render() {
  return (
    <React.Fragment>
      <StructureDiv
        bucket1={[
          <Navbar/>,

          <CraftDetailHead />,

          <StructureDiv bucket1={[<ProductDetails />]} />,
        ]}
      />
    </React.Fragment>
  );
}
}

export default Craftdetail;

