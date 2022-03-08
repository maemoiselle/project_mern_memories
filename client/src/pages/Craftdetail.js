import React, { useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import StructureDiv from '../components/__structures/StructureDiv';
import Navbar from '../components-custom/Navbar';
import CraftDetailHead from '../components-custom/CraftDetailHead';
import ProductDetails from '../components-custom/ProductDetails';
import { useDispatch } from 'react-redux';

const Craftdetail = (props) => {
  const [currentId, setCurrentId] = useState(0);
  const location = useLocation();
  const state = location.state;
  console.log(state);
  const dispatch = useDispatch();

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


export default Craftdetail;

