const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');


dotenv.config();

const app = express();
const PORT = 5000;


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


mongoose
  .connect("mongodb://127.0.0.1:27017/contactFormDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));


const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  date: { type: String, required: true },
  address: { type: String, required: true },
  plan: { type: String, required: true },
  message: { type: String, required: true },
});


const Contact = mongoose.model("Contact", ContactSchema);


app.post("/submit-form", async (req, res) => {
  const { name, email, number, date, address, plan, message } = req.body;

  try {
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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

mongoose.connect("mongodb://127.0.0.1:27017/signupWD", { uuseNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));
  
  // Routes
  app.use('/api/auth', authRoutes);