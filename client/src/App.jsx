import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ServicesSection from "./components/ServicesSection";
import PricingTable from "./components/PricingTable";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Basic from "./components/Basic";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <><Hero /> <About /><ServicesSection /> <PricingTable /> <Basic/>  <Gallery /> <Team />  <Footer /> </> } />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/pricing" element={<PricingTable />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
     
    </Router>
  );
}

export default App;
