import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about'>
    <h1>About Us</h1>
    <section className="team-section">
      <div className="team-text">
        <h2>Team Of Passionate People</h2>
        <p>We are a passionate team of wedding planners, Priyanka Yadav, Hritik Chaouhan, Shreyanshi Jain, and Abhishek Singh—dedicated to making your dream wedding a reality. With a shared love for creativity, meticulous attention to detail, and a commitment to delivering unforgettable experiences, we ensure that every aspect of your special day is flawlessly executed. From intimate gatherings to grand celebrations, we handle all the planning, design, and coordination, allowing you to relax and enjoy every moment of your wedding.</p>
        <p>Let us craft a wedding that reflects your unique love story and personal style!</p>
        <button className="read-more-btn">Read More</button>
      </div>
      <div className="team-image">
        <img
          src="https://i.pinimg.com/736x/ca/5f/3b/ca5f3b7dc7bb891cacde42cd56aa5a62.jpg" 
          alt="Forever and Always"
        />
      </div>
    </section>

    </div>
  );
};

export default About;
