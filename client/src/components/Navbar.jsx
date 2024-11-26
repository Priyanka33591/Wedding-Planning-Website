import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);  // Track the logged-in user
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in from localStorage
    const loggedInUser = localStorage.getItem('username');
    if (loggedInUser) {
      setUser(loggedInUser);  // Set the username from localStorage
    }
  }, []);  // This effect runs only once when the component mounts

  const handleLogout = () => {
    localStorage.removeItem('username'); // Remove the username from localStorage
    setUser(null);  // Clear user state
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <FaUserCircle size={30} style={{ color: '#FF6B6B' }} />
        <span>Wedding Planners</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/team">Team</Link></li>
      </ul>
      <div>
        {user ? (
          <div className="user-info">
            <span>Welcome, {user}!</span>
            <button className='logout' onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <button className='signup' onClick={() => navigate('/signup')}>Sign UP</button>
            <button className='signin' onClick={() => navigate('/login')}>Sign IN</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
