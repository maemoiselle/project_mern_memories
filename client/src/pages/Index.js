import React from 'react';
import { useLocation } from 'react-router-dom';

import Navbar from '../components-custom/Navbar';
import Gallery4 from '../components/gallery/Gallery4';

export default function Index() {
  const location = useLocation();
  const state = location.state;
  console.log(state);

  return (
    <React.Fragment>
      <Navbar />

      <Gallery4 content={null} />
    </React.Fragment>
    
  );
}

