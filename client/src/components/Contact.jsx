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
    plan: "", // No default plan
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Populate selectedPlan from location.state
  useEffect(() => {
    if (location.state?.plan) {
      setFormData((prevData) => ({
        ...prevData,
        plan: location.state.plan,
      }));
    }
  }, [location.state]);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
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
        plan: "", // Reset plan
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
      {/* {formData.plan && <p>You have selected the <strong>{formData.plan}</strong> plan.</p>} */}
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
            <option value="" disabled>
              Select a Plan
            </option>
            <option value="Basic">Basic Plan</option>
            <option value="Standard">Standard Plan</option>
            <option value="Premium">Premium Plan</option>
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
