import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaUserCircle size={30} style={{ color: '#FF6B6B' }} />
        <span>Planner</span>
      </div>
      <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/team">Team</Link></li>
      </ul>
      <FaMoon size={24} style={{ color: '#FF6B6B' }} />
    </nav>
  );
};

export default Navbar;
