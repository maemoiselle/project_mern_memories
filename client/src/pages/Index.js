import React from 'react';

import Navbar from '../components-custom/Navbar';
import Gallery4 from '../components/gallery/Gallery4';

export default function Index() {
  return (
    <React.Fragment>
      <Navbar />

      <Gallery4 content={null} />
    </React.Fragment>
    
  );
}

