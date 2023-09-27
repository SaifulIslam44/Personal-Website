import React, { useState } from 'react';
import './Homepage.css';
function CategoriesMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`categories-menu ${isMenuOpen ? 'open' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="menu-button" onClick={toggleMenu}>
        <img src="menu.png" alt="Categories" />
      </div>
      <div className={`category-list ${isMenuOpen ? 'slide-in' : ''}`}>
        <button className="category-button">Category 1</button>
        <button className="category-button">Category 2</button>
        <button className="category-button">Category 3</button>
      </div>
    </div>
  );
}

export default CategoriesMenu;
