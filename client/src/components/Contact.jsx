import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
    address: "",
    plan: "", 
    foodPreference: "", 
    weddingTime: "", 
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (location.state?.plan) {
      setFormData((prevData) => ({
        ...prevData,
        plan: location.state.plan,
      }));
    }
  }, [location.state]);

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("http://localhost:5000/submit-form", formData);
      alert(response.data.message);
      setFormData({
        name: "",
        email: "",
        number: "",
        date: "",
        address: "",
        plan: "",
        foodPreference: "",
        weddingTime: "",
        message: "",
      }); 
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="tel"
            name="number"
            placeholder="Number"
            value={formData.number}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <select
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a Plan</option>
            <option value="Basic">Basic Plan</option>
            <option value="Standard">Standard Plan</option>
            <option value="Premium">Premium Plan</option>
          </select>
        </div>
        <div>
          <label>Food Preference:</label>
          <select
            name="foodPreference"
            value={formData.foodPreference}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Food Type</option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
            <option value="Both">Both</option>
          </select>
        </div>
        <div>
          <label>Wedding Time:</label>
          <select
            name="weddingTime"
            value={formData.weddingTime}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Wedding Time</option>
            <option value="Day">Day</option>
            <option value="Night">Night</option>
          </select>
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
