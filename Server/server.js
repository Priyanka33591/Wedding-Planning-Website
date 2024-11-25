const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/contactFormDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Define a Mongoose Schema
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  date: { type: String, required: true },
  address: { type: String, required: true },
  plan: { type: String, required: true },
  message: { type: String, required: true },
});

// Create a Mongoose Model
const Contact = mongoose.model("Contact", ContactSchema);

// Route to handle form submission
app.post("/submit-form", async (req, res) => {
  const { name, email, number, date, address, plan, message } = req.body;

  try {
    // Save data to MongoDB
    const newContact = new Contact({
      name,
      email,
      number,
      date,
      address,
      plan,
      message,
    });

    await newContact.save();
    res.status(200).json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ success: false, message: "Error saving form data." });
  }
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
