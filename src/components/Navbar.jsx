// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaUtensils, FaTag, FaClock, FaPercent, FaPhone, FaMotorcycle, FaIdCard } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      {/* Custom CSS inside component */}
      <style>
        {`
          .nav-hover:hover {
            color: black !important;
            background-color: white;
            border-radius: 5px;
            transition: all 0.3s ease;
          }
          .nav-btn-hover:hover {
            background-color: black !important;
            color: white !important;
            transition: all 0.3s ease;
          }
          /* Active section highlight */
          .active-link {
            color: black !important;
          }
          /* Marquee styles */
          .marquee-container {
            background: linear-gradient(90deg, #0d5c55, #1a8a7f);
            color: white;
            padding: 8px 0;
            font-size: 14px;
            width: 100%;
            position: fixed;
            top: 0;
            z-index: 1031;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            border-bottom: 2px solid #ffcc00;
          }
          .marquee-content {
            display: inline-block;
            padding-left: 100%;
            animation: marquee 25s linear infinite;
            white-space: nowrap;
          }
          .marquee-content svg {
            margin: 0 10px;
            color: #ffcc00;
          }
          .marquee-content .highlight {
            color: #ffcc00;
            font-weight: bold;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          /* Adjust navbar position */
          .navbar-adjust {
            top: 38px;
          }
        `}
      </style>

      {/* Marquee Section - Add this above the nav */}
      <div className="marquee-container">
        <div className="marquee-content">
          <FaUtensils /> Welcome to College Canteen Management System 
          <span className="highlight">•</span> 
          <FaTag /> Today's Special: Paneer Tikka + Naan @ ₹99 only 
          <span className="highlight">•</span> 
          <FaClock /> Opening Hours: 8:00 AM - 6:00 PM 
          <span className="highlight">•</span> 
          <FaPercent /> Get 15% off on combo meals using code: COMBO15 
          <span className="highlight">•</span> 
          <FaPhone /> Quick Order: Call 98765-43210 
          <span className="highlight">•</span> 
          <FaMotorcycle /> Free delivery for orders above ₹200 
          <span className="highlight">•</span> 
          <FaIdCard /> Student Discount: 10% off with valid ID
        </div>
      </div>

      <nav
        className="navbar navbar-expand-lg fixed-top navbar-adjust"
        style={{ backgroundColor: "#15746B" }}
      >
        <div className="container">
          {/* Logo + Brand */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={logo}
              alt="Logo"
              width="110"
              height="50"
              className="me-2"
            />
          </Link>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {/* Scrollable links */}
              <li className="nav-item">
                <a
                  className="nav-link fw-bold text-white px-3 nav-hover"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold text-white px-3 nav-hover"
                  href="#about"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold text-white px-3 nav-hover"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold text-white px-3 nav-hover"
                  href="#contact"
                >
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold text-white px-3 nav-hover"
                  href="#feedback"
                >
                  Feedback
                </a>
              </li>
              
            </ul>
          </div>

          {/* Login Button */}
          <div className="d-flex gap-2">
            <Link
              to="/login"
              className="btn btn-light d-flex align-items-center px-3 py-2 rounded-pill fw-bold nav-btn-hover"
            >
              <FaUserCircle className="me-2" size={20} />
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-dark d-flex align-items-center px-3 py-2 rounded-pill fw-bold nav-btn-hover"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;