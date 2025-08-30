// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
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
        `}
      </style>

      <nav
        className="navbar navbar-expand-lg fixed-top"
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

              {/* Separate page links */}
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-link fw-bold text-white px-3 nav-hover"
                >
                  Services
                </Link>
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
