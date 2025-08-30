// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import hero from "../assets/home_hero.png";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero-section d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          position: "relative",
        }}
      >
        {/* Overlay for dark effect */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        ></div>

        {/* Content */}
        <div className="container position-relative">
          <h1
            className="display-3 fw-bold"
            style={{ fontFamily: "'Times New Roman', serif", color:"black", marginTop:"150px"}}
          >
            Best Food For <br /> Your Taste
          </h1>
          <p className="lead mt-3 text-black">
            Fresh, affordable meals to fuel your day and <br />
            boost your <strong>energy</strong> on campus.
          </p>

          {/* Buttons */}
          <div className="mt-4 d-flex gap-3 justify-content-center">
            <a
              href="#get-started"
              className="btn btn-dark fw-bold px-4 py-2 rounded-pill"
            >
              Get Started Today →
            </a>
            <a
              href="#learn-more"
              className="btn btn-outline-dark fw-bold px-4 py-2 rounded-pill"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
