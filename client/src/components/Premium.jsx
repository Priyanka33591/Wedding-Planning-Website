import React, { useState } from 'react';
import './Gallery.css';

const imageArray = [
  'https://i.ytimg.com/vi/L3C-f2SoutY/maxresdefault.jpg',
  'https://i.ytimg.com/vi/VmaIBFEPk1U/maxresdefault.jpg',
  'https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2018/01/1509217236_18076851_1371853039549003_5253843284320669833_o.jpg',
  'https://th.bing.com/th/id/OIP.TYK0CEfSb8_tYG9xZSI8CgAAAA?rs=1&pid=ImgDetMain',
  'https://r1imghtlak.mmtcdn.com/c9a5ac48fac111ecbff70a58a9feac02.jpeg?&output-quality=75&downsize=243:162&crop=243:162;22,0&output-format=jpg',
  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/d7dca3158027971.638474260aa2c.jpg'

];

const Premium = () => {
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
        <h2>Our PREMIUM VENUE</h2>
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
  
  export default Premium;