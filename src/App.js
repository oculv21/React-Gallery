import React from 'react';
import logo from './logo.svg';
import APIKey from './config.js';

import Search from './Search';
import Nav from './Nav';
import PhotoGallery from './PhotoGallery';

function App() {
  return (
    <div className="container">
      <Search />
      <Nav />
      <PhotoGallery />
    </div>
      
  );
}

export default App;
