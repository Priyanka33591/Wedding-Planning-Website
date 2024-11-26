import React, { useState } from 'react';
import './Gallery.css';

const imageArray = [
  'https://th.bing.com/th/id/OIP.7AzqjeRS5_1l8Z6ma1JVgAHaE8?rs=1&pid=ImgDetMain',
  'https://i.pinimg.com/736x/09/da/f0/09daf068c69372946e1efea5cacf1c2d.jpg',
  'https://th.bing.com/th/id/OIP.alV0-b6p8m9Q881_shQ6VgAAAA?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.8N3EazGyczHRNjn67k-7pwHaE7?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.hpAq-6Yj7ynSnGWkwLmu0AHaE8?w=720&h=480&rs=1&pid=ImgDetMain',
  'https://i.pinimg.com/originals/95/53/a7/9553a7a0946276852fd21d979d5bc8c0.jpg'

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