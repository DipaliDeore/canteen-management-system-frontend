import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import food from "../assets/subscribe.png"; // background image

export default function SubscriptionPlans() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${food})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div
        className="flex-grow-1 d-flex justify-content-center align-items-center"
        style={{ padding: "50px 20px" }}
      >
        <div className="container text-center text-white">
          <h2 className="fw-bold mb-5">Subscription Plans</h2>
          <div className="row justify-content-center g-4">
            {/* Basic Plan */}
            <div className="col-md-3">
              <div
                className="card shadow-lg h-100"
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "20px",
                  color: "white",
                  height: "420px",
                }}
              >
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h1 className="card-title text-black fw-bold">Basic Plan</h1>
                    <h2 className="fw-bold">
                      $28 <small className="fs-6">/month</small>
                    </h2>
                    <ul className="list-unstyled text-start mt-4">
                      <li>✅ 1 meal / day</li>
                      <li>✅ Standard Menu</li>
                      <li>☑️ Limited Sweet</li>
                    </ul>
                  </div>
                  <button className="btn btn-success w-100 mt-3">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="col-md-3">
              <div
                className="card shadow-lg h-100"
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "20px",
                  color: "white",
                  height: "420px",
                }}
              >
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h1 className="card-title text-black fw-bold">Premium Plan</h1>
                    <h2 className="fw-bold">
                      $60 <small className="fs-6">/month</small>
                    </h2>
                    <ul className="list-unstyled text-start mt-4">
                      <li>✅ 2 meals / day</li>
                      <li>✅ Customizable Menu</li>
                      <li>☑️ Unlimited Sweet</li>
                    </ul>
                  </div>
                  <button className="btn btn-success w-100 mt-3">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
