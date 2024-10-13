import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        <div className="service-card">
          <div className="icon-container">
            <img src="https://static.vecteezy.com/system/resources/previews/021/768/395/non_2x/cute-camera-icon-free-vector.jpg" alt="Camera Icon" /> 
          </div>
          <h3>Full Video And Camera Service</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, non?</p>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <img src="https://images.vexels.com/media/users/3/296575/isolated/preview/d32ae81b1426c24fb8ca3fb938e2c1c4-cute-flowers-icon.png?w=360" alt="Flower Icon" /> 
          </div>
          <h3>We Arrange Flowers And Decorations</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, non?</p>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <img src="https://i.pinimg.com/originals/47/5c/76/475c76203a7005855baf9c348bc6ea22.png" alt="Location Icon" /> 
          </div>
          <h3>Finding The Right Place For You</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, minima?</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
