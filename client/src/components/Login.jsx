import React, { useState } from 'react';
import './Auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      console.log(response.data.token); 
      navigate('/');
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
        <h2 className="auth-subtitle">Sign in to your Account</h2>
        <p className="auth-description">Enter your Email & Password to continue.</p>
        {error && <p className="auth-error">{error}</p>}
        <form className="auth-form" onSubmit={handleLogin}>
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
          <div className="input-group-checkbox">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="auth-button">Sign In</button>
        </form>
        <p className="auth-footer">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
