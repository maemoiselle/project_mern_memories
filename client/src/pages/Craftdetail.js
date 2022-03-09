import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import StructureDiv from "../components/__structures/StructureDiv";
import Navbar from "../components-custom/Navbar";
import CraftDetailHead from "../components-custom/CraftDetailHead";
import ProductDetails from "../components-custom/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { getMaterials } from "../actions/posts";

const Craftdetail = ({craftName, craftImg, craftId, difficulty}) => {
  const [currentId, setCurrentId] = useState(0);
  const location = useLocation();
  const state = location.state;
  console.log(state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMaterials());
  }, [currentId, dispatch]);

  return (
    <React.Fragment>
      <StructureDiv
        bucket1={[
          <Navbar />,

          <CraftDetailHead setCurrentID={setCurrentId}/>,

        ]}
      />
    </React.Fragment>
  );
};

export default Craftdetail;
