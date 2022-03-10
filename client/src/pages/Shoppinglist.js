import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import StructureDiv from "../components/__structures/StructureDiv";
import Navbar from "../components-custom/Navbar";
import ShoppingListHead from "../components-custom/ShoppingListHead";

const Shoppinglist = ({username}) => {
  const [currentId, setCurrentId] = useState(0);
  const location = useLocation();
  const state = location.state;
  console.log(state);



  return (
    <React.Fragment>
      <StructureDiv
        bucket1={[
          <Navbar />,

          <ShoppingListHead username={location.state.username}/>,

        ]}
      />
    </React.Fragment>
  );
};

export default Shoppinglist;