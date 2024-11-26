import React, { useState } from 'react';
import './Gallery.css';

const imageArray = [
  'https://i.pinimg.com/originals/de/91/cc/de91ccc098d853fe7e23f59d7839d09e.jpg',
  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/d7dca3158027971.638474260aa2c.jpg',
  'https://boscalicious.co.uk/wp-content/uploads/Wedding-Venue-1.jpg',
  'https://th.bing.com/th/id/OIP.8UWyx-nprFxTrjb6NLKptQHaFj?w=1000&h=750&rs=1&pid=ImgDetMain',
  'https://imu.uiowa.edu/sites/imu.uiowa.edu/files/styles/widescreen__1920_x_1080/public/2022-06/Event-Services-Main-Lounge2.jpg?h=1d3b1573&itok=EBefhNES',
  'https://th.bing.com/th/id/OIP.6D_ITwrKA0_GO3-lGlyEigHaE7?rs=1&pid=ImgDetMain'

];

const Standard = () => {
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
        <h2>Our STANDARD VENUE</h2>
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
  
  export default Standard;