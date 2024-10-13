import React from 'react';
import './Footer.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="box-container">
        <div className="box" data-aos="fade-up">
          <h3> <i className="fas fa-user"></i> wedding planner </h3>
          <p>We are a team of experienced wedding planners dedicated to creating unforgettable weddings for our clients.</p>
        </div>

        <div className="box" data-aos="fade-up">
          <h3>Our Services</h3>
          <a href="#"><i className="fas fa-chevron-right"></i> Full Wedding Planning</a>
          <a href="#"><i className="fas fa-chevron-right"></i> Partial Wedding Planning</a>
          <a href="#"><i className="fas fa-chevron-right"></i> Day-of Coordination</a>
          <a href="#"><i className="fas fa-chevron-right"></i> Vendor Referrals</a>
        </div>

        <div className="box" data-aos="fade-up">
          <h3>Contact Us</h3>
          <a href="tel:9670701380"><i className="fas fa-phone"></i> 9670701380</a>
          <a href="tel:7902019424"><i className="fas fa-phone"></i> 7902019424</a>
          <a href="mailto:info@weddingplanner.com"><i className="fas fa-envelope"></i> info@weddingplanner.com</a>
          <a href="#"><i className="fas fa-map"></i> GLA University , Mathura</a>
        </div>

        <div className="box" data-aos="fade-up">
          <h3>Follow Us</h3>
          <a href="#"><i className="fab fa-facebook-f"></i> facebook</a>
          <a href="#"><i className="fab fa-twitter"></i> twitter</a>
          <a href="#"><i className="fab fa-instagram"></i> instagram</a>
          <a href="#"><i className="fab fa-pinterest"></i> pinterest</a>
        </div>
      </div>

      <div className="credit"> &copy; copyright @ 2024 by <span>GLA Wedding Planner</span> </div>
    </footer>
  );
}

export default Footer;
