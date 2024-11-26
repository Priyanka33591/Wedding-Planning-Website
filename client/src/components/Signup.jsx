import React from 'react';
import './Auth.css';

const Signup = () => {
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
        <form className="auth-form">
          <div className="input-group">
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
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
