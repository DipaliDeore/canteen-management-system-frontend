import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import food from "../assets/food-bg.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CanteenServices() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 576 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };

  const services = [
    {
      title: "🍽️ Daily Dining",
      desc: "Fresh breakfast, lunch, and dinner options available throughout the day.",
      details: (
        <>
          <strong>Breakfast:</strong> 8:00 AM - 11:00 AM <br />
          <strong>Lunch:</strong> 12:00 PM - 3:00 PM <br />
          <strong>Dinner:</strong> 6:00 PM - 8:00 PM
        </>
      ),
      btn: "Starting from ₹50",
      btnClass: "btn btn-primary",
    },
    {
      title: "🎪 Catering Services",
      desc: "Professional catering services for college events, seminars, and conferences.",
      details: (
        <ul className="list-unstyled text-start" style={{ fontSize: "14px" }}>
          <li>✔️ Customizable menus</li>
          <li>✔️ Professional setup</li>
          <li>✔️ On-time delivery</li>
          <li>✔️ Bulk discounts</li>
        </ul>
      ),
      btn: "Quote on request",
      btnClass: "btn btn-success",
    },
    {
      title: "🥗 Nutritious Meal Plans",
      desc: "Nutritious meal plans tailored for specific dietary needs and health goals.",
      details: (
        <ul className="list-unstyled text-start" style={{ fontSize: "14px" }}>
          <li>✔️ Weight management plans</li>
          <li>✔️ Protein-rich diets</li>
          <li>✔️ Custom nutrition options</li>
        </ul>
      ),
      btn: "₹200/day onwards",
      btnClass: "btn btn-warning",
    },
    {
      title: "🍟 Snacks Corner",
      desc: "Quick bites and delicious snacks to energize your day.",
      details: (
        <ul className="list-unstyled text-start" style={{ fontSize: "14px" }}>
          <li>✔️ Sandwiches & Burgers</li>
          <li>✔️ Fries & Pakoras</li>
          <li>✔️ Healthy snacks</li>
        </ul>
      ),
      btn: "From ₹30",
      btnClass: "btn btn-info",
    },
    {
      title: "☕ Beverages & Juices",
      desc: "Refreshing drinks to keep you hydrated and active all day long.",
      details: (
        <ul className="list-unstyled text-start" style={{ fontSize: "14px" }}>
          <li>✔️ Fresh Juices</li>
          <li>✔️ Hot & Cold Coffee</li>
          <li>✔️ Energy drinks</li>
        </ul>
      ),
      btn: "From ₹20",
      btnClass: "btn btn-dark",
    },
  ];

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
        style={{ paddingTop: "80px", paddingBottom: "40px" }}
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

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2500}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="pb-4"
          itemClass="px-3"
        >
          {services.map((service, index) => (
            <div key={index} className="card h-100 shadow-lg position-relative">
              <div
                className="card-body text-center"
                style={{ paddingBottom: "60px" }}
              >
                <h4 className="card-title fs-5 mb-3">{service.title}</h4>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  {service.desc}
                </p>
                <div style={{ fontSize: "14px" }}>{service.details}</div>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <a href="#" className={service.btnClass}>
                  {service.btn}
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <Footer />
    </div>
  );
}
