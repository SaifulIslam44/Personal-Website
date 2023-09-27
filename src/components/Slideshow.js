import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatically move to the next image every 10 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 10000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Handle mouse click to navigate images
  const handleSlideshowClick = () => {
    nextImage(); // You can customize this to provide a smoother transition or other actions.
  };

  // Handle click on a dot to navigate to the corresponding image
  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="slideshow-container">
      <div
        className="slideshow"
        onClick={handleSlideshowClick} // Attach click event to the slideshow container
      >
        <img
          src={require(`./${images[currentImageIndex]}`)}
          alt={`Slideshow ${currentImageIndex + 1}`}
          className="slideshow-image"
        />
      </div>
      <div className="slideshow-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`slideshow-dot ${currentImageIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
