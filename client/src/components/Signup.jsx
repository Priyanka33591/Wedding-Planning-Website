import React, { useState } from 'react';
import './Auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        fullName,
        email,
        password,
      });
      console.log(response.data.message); // Handle success
      navigate('/login'); // Redirect to login page after successful signup
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <img
          src="https://laurenkearns.com/wp-content/uploads/sites/4131/2022/07/Hamilton-Farm-Wedding_0309.jpg" 
          alt="Background"
          className="auth-image"
        />
      </div>
      <div className="auth-right">
        <h1 className="auth-title">GLA Wedding Planners</h1>
        <h2 className="auth-subtitle">Sign up for an Account</h2>
        <p className="auth-description">Enter your details to create an account.</p>
        {error && <p className="auth-error">{error}</p>}
        <form className="auth-form" onSubmit={handleSignup}>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Full Name" 
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        <p className="auth-footer">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
