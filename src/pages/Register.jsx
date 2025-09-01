import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/food-bg.png";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Regex patterns
  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^\d{10}$/;

  // Validate field while typing
  const validateField = (field, value) => {
    let message = "";

    switch (field) {
      case "name":
        if (!nameRegex.test(value)) {
          message = "Name must contain only letters and spaces";
        }
        break;
      case "email":
        if (!emailRegex.test(value)) {
          message = "Invalid email format";
        }
        break;
      case "mobile":
        if (!mobileRegex.test(value)) {
          message = "Mobile number must be 10 digits";
        }
        break;
      case "confirmPassword":
        if (value !== password) {
          message = "Passwords do not match!";
        }
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any errors still exist
    if (Object.values(errors).some((err) => err !== "")) {
      return;
    }

    try {
      const res = await fetch("http://localhost:5001/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, mob_no: mobile, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");

      alert(data.message);
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div
      className="register-page d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div
        className="register-box p-4"
        style={{
          background: "rgba(0,0,0,0.6)",
          borderRadius: "10px",
          maxWidth: "400px",
          width: "100%",
          color: "#fff",
        }}
      >
        <h2 className="text-center mb-3">Register</h2>
        <p className="text-center" style={{ fontSize: "14px" }}>
          Fill the form below to create your account
        </p>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                validateField("name", e.target.value);
              }}
              required
            />
            {errors.name && <small className="text-danger">{errors.name}</small>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateField("email", e.target.value);
              }}
              required
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          {/* Mobile */}
          <div className="mb-3">
            <label className="form-label">Mobile No</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
                validateField("mobile", e.target.value);
              }}
              required
            />
            {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                validateField("confirmPassword", e.target.value);
              }}
              required
            />
            {errors.confirmPassword && (
              <small className="text-danger">{errors.confirmPassword}</small>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn w-100 fw-bold"
            style={{ backgroundColor: "#0d6f65", color: "white" }}
            disabled={Object.values(errors).some((err) => err !== "")}
          >
            Register
          </button>
        </form>

        <p className="text-center mt-3" style={{ fontSize: "14px" }}>
          Already have an account?{" "}
          <a href="/login" style={{ color: "#0d6f65" }}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
