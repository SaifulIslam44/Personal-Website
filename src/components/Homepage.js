// src/components/Homepage.js
import React from 'react';
import Slideshow from './Slideshow';
import SellingStore from './SellingStore';
import CategoriesMenu from './CategoriesMenu';
import './Homepage.css';

const Homepage = () => {

  const slideshowImages = [
    'image1.jpg',
    'slide2.gif',
    
    // Add your image URLs here
  ];


  return (
    <div>
        
      {/* Header Button  */}
      <div className="header-buttons">
          <button className="button">Home</button>
          <button className="button">Contact</button>
        </div>
        {/* Header Title */}
      <h1 className="title-container">
      <div className="title-text">
  <img src={require('./left.gif')} alt="Left Logo" className="left-logo" />
  Google Play Points Official Bangladesh
  <img src={require('./left1.gif')} alt="Right Logo" className="right-logo" />
</div>
      </h1>
      
      <div>
      {/* ... */}
      <Slideshow images={slideshowImages} />
      {/* ... */}
    </div>
      <SellingStore />
    </div>
  );
};

export default Homepage;
