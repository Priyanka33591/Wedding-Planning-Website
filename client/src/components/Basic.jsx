import React, { useState } from 'react';
import './Gallery.css';

const imageArray = [
  'https://th.bing.com/th/id/OIP.7AzqjeRS5_1l8Z6ma1JVgAHaE8?rs=1&pid=ImgDetMain',
  'https://i.pinimg.com/originals/4e/2e/c5/4e2ec5651d798935907343a16619b904.jpg',
  'https://i.pinimg.com/474x/e0/ce/a3/e0cea3b65251f14510b2652d97356bfb.jpg',
  'https://th.bing.com/th/id/OIP.8N3EazGyczHRNjn67k-7pwHaE7?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.hpAq-6Yj7ynSnGWkwLmu0AHaE8?w=720&h=480&rs=1&pid=ImgDetMain',
  'https://i.pinimg.com/736x/41/e7/2d/41e72da8dc04262b07bdebac325f2232.jpg'

];

const Basic = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1
      );
    };
  
    const getImageClass = (index) => {
      if (index === currentIndex) return 'active';
      if (index === (currentIndex - 1 + imageArray.length) % imageArray.length)
        return 'prev';
      if (index === (currentIndex + 1) % imageArray.length) return 'next';
      return 'hidden';
    };
  
    return (
      <div className="gallery-wrapper">
        <h2>Our BASIC VENUE</h2>
        <div className="gallery-container">
          {imageArray.map((image, index) => (
            <div key={index} className={`gallery-item ${getImageClass(index)}`}>
              <img src={image} alt={`Gallery ${index}`} />
            </div>
          ))}
        </div>
        <div className="controls">
          <button onClick={handlePrevious}>❮</button>
          <button onClick={handleNext}>❯</button>
        </div>
      </div>
    );
  };
  
  export default Basic;