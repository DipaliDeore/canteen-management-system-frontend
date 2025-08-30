// src/pages/LandingPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";   
import About from "./AboutUs"; 
import Footer from "../components/Footer";  // import footer
import Feedback from "./Feedback";


function LandingPage() {
  return (
    <>
      {/* Smooth scrolling CSS */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <Navbar />

      <div id="home" style={{ scrollMarginTop: "80px" }}>
        <Home />
      </div>

      <div id="about" style={{ scrollMarginTop: "80px" }}>
        <About />
      </div>

      <div id="feedback" style={{ scrollMarginTop: "80px" }}>
        <Feedback />
      </div>

      <Footer/>
    </>
  );
}

export default LandingPage;
