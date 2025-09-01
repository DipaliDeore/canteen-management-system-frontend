import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import food from "../assets/food-bg.png";

export default function CanteenServices() {
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
            <Navbar />

            {/* Main content */}
            <div
                className="container flex-grow-1 d-flex flex-column justify-content-center"
                style={{ paddingTop: "80px", paddingBottom: "40px" }} // adjust if navbar height differs
            >
                <div className="text-center text-white mb-5">
                    <h2 className="fw-bold">
                        Comprehensive dining solutions designed to meet all your food needs
                        on campus
                    </h2>
                    <p className="lead">
                        Affordable, healthy, and convenient meals — anytime, every day.
                    </p>
                </div>

                <div className="row g-4">
                    {/* Daily Dining */}
                    <div className="col-md-4">
                        <div className="card h-100 shadow-lg">
                            <div className="card-body text-center">
                                <h4 className="card-title">🍽️ Daily Dining</h4>
                                <p className="card-text">
                                    Fresh breakfast, lunch, and dinner options available throughout
                                    the day.
                                </p>
                                <p>
                                    <strong>Breakfast:</strong> 8:00 AM - 11:00 AM <br />
                                    <strong>Lunch:</strong> 12:00 PM - 3:00 PM <br />
                                    <strong>Dinner:</strong> 6:00 PM - 8:00 PM
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Starting from ₹50
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Catering */}
                    <div className="col-md-4">
                        <div className="card h-100 shadow-lg">
                            <div className="card-body text-center">
                                <h4 className="card-title">🎪 Catering Services</h4>
                                <p className="card-text">
                                    Professional catering services for college events, seminars,
                                    and conferences.
                                </p>
                                <ul className="list-unstyled text-start">
                                    <li>✔️ Customizable menus</li>
                                    <li>✔️ Professional setup</li>
                                    <li>✔️ On-time delivery</li>
                                    <li>✔️ Bulk discounts</li>
                                </ul>
                                <a href="#" className="btn btn-success">
                                    Quote on request
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Nutritious Plans */}
                    <div className="col-md-4">
                        <div className="card h-100 shadow-lg">
                            <div className="card-body text-center">
                                <h4 className="card-title">🥗 Nutritious Meal Plans</h4>
                                <p className="card-text">
                                    Nutritious meal plans tailored for specific dietary needs and
                                    health goals.
                                </p>
                                <ul className="list-unstyled text-start">
                                    <li>✔️ Weight management plans</li>
                                    <li>✔️ Protein-rich diets</li>
                                    <li>✔️ Custom nutrition options</li>
                                </ul>
                                <a href="#" className="btn btn-warning">
                                    ₹200/day onwards
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
