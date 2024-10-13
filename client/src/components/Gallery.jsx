import React, { useState } from 'react';
import './Gallery.css';

const imageArray = [
  'https://media-api.xogrp.com/images/f4570601-a1e6-4802-86fb-ad9e988066fe~rs_768.h',
  'https://static01.nyt.com/images/2023/05/14/multimedia/FAT-INDIAN-WEDDINGS-01-hptq/FAT-INDIAN-WEDDINGS-01-hptq-superJumbo.jpg',
  'https://i.pinimg.com/736x/60/3d/37/603d371ba17949d85f97f9e2251a03a1.jpg',
  'https://i.ytimg.com/vi/g65uJAlDQ9E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDC5VHPMhLQby8Nr07QM9Q8HVETaA',
  'https://i.pinimg.com/736x/82/cc/96/82cc96d28b45289cb2eb8bc8701c34f0.jpg',
  'https://www.shutterstock.com/shutterstock/videos/1105996193/thumb/1.jpg?ip=x480'

];

const Gallery = () => {
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
        <h2>Our GALLERY</h2>
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
  
  export default Gallery;