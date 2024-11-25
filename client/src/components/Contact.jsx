import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
    address: "",
    plan: "Basic Plan",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/submit-form", formData);
      alert(response.data.message);
    } catch (error) {
      alert("Error submitting the form. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        </div>
        <div>
          <input type="tel" name="number" placeholder="Number" onChange={handleChange} required />
          <input type="date" name="date" onChange={handleChange} required />
        </div>
        <div>
          <input type="text" name="address" placeholder="Your Address" onChange={handleChange} required />
          <select name="plan" onChange={handleChange} required>
            <option value="Basic Plan">Basic Plan</option>
            <option value="Standard Plan">Standard Plan</option>
            <option value="Premium Plan">Premium Plan</option>
          </select>
        </div>
        <textarea name="message" placeholder="Your Message" onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
