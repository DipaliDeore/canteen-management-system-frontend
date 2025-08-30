// src/pages/About.jsx
import React from "react";
import Navbar from "../components/Navbar";
import burger from "../assets/burger.png"; // Replace with your burger image

function AboutUs() {
  return (
    <>
      <Navbar />

      <section className="about-section" style={{ marginTop: "70px" }}>
        <div className="row g-0" style={{ minHeight: "80vh" }}>
          {/* Left Side - Full Image */}
          <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">
            <img
              src={burger}
              alt="Burger"
              className="img-fluid h-100 w-100"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Right Side - With green corners */}
          <div
            className="col-md-6 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "#fff", padding: "40px", position: "relative" }}
          >
            <div
              className="about-box p-4"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                position: "relative",
                padding: "40px",
                maxWidth: "600px",
              }}
            >
              {/* Green Corner Decorations */}
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  width: "0",
                  height: "0",
                  borderTop: "40px solid #0d6f65",
                  borderRight: "40px solid transparent",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  width: "0",
                  height: "0",
                  borderTop: "40px solid #0d6f65",
                  borderLeft: "40px solid transparent",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  width: "0",
                  height: "0",
                  borderBottom: "40px solid #0d6f65",
                  borderRight: "40px solid transparent",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  width: "0",
                  height: "0",
                  borderBottom: "40px solid #0d6f65",
                  borderLeft: "40px solid transparent",
                }}
              />

              {/* Content */}
              <h2 className="fw-bold mb-3 text-center">About Us</h2>
              <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                We believe that great food and efficient service are essential
                to a positive college experience. Our mission is to transform
                college canteens into modern, efficient, and student-friendly
                spaces through innovative technology solutions.
              </p>
              <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                By providing comprehensive canteen management tools, we help
                colleges reduce wait times, improve food quality tracking, and
                create a more enjoyable dining experience for students while
                streamlining operations for administrators.
              </p>

              <h5 className="fw-bold mt-4 text-center">Why we Started ?</h5>
              <p
                className="fst-italic text-center"
                style={{ fontSize: "15px" }}
              >
                "After experiencing long queues and inefficient ordering systems
                during our college years, we knew there had to be a better way.
                We founded Canteen Manager to solve these everyday problems that
                affect thousands of students."
              </p>

              <div className="text-center mt-4">
                <a
                  href="#more"
                  className="btn fw-bold px-4 py-2"
                  style={{
                    backgroundColor: "#0d6f65",
                    color: "white",
                    borderRadius: "8px",
                  }}
                >
                  More About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
