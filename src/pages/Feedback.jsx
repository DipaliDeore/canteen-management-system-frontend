import React, { useState, useRef } from "react";
import food from "../assets/food-bg.png";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    category: "",
    feedback: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const textareaRef = useRef(null);

  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation for individual fields
  const validateField = (field, value) => {
    let message = "";
    switch (field) {
      case "name":
        if (!nameRegex.test(value.trim())) message = "Name must contain only letters and spaces";
        break;
      case "email":
        if (!emailRegex.test(value.trim())) message = "Invalid email format";
        break;
      case "rating":
        if (value === 0) message = "Please select a rating";
        break;
      case "category":
        if (!value) message = "Please select a category";
        break;
      case "feedback":
        if (value.trim().length < 5) message = "Feedback must be at least 5 characters long";
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    validateField(id, value);

    // Auto-resize for textarea
    if (id === "feedback" && textareaRef.current) {
      textareaRef.current.style.height = "auto"; // reset first
      const newHeight = Math.min(textareaRef.current.scrollHeight, 150); // max height 200px
      textareaRef.current.style.height = `${newHeight}px`;
      textareaRef.current.style.overflowY =
        textareaRef.current.scrollHeight > 150 ? "auto" : "hidden";
    }
  };

  // Handle rating separately
  const handleRating = (star) => {
    setFormData((prev) => ({ ...prev, rating: star }));
    validateField("rating", star);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");

    // Run final validation
    let hasError = false;
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
      if (
        (key === "name" && !nameRegex.test(formData[key].trim())) ||
        (key === "email" && !emailRegex.test(formData[key].trim())) ||
        (key === "feedback" && formData[key].trim().length < 5) ||
        (key === "category" && !formData[key]) ||
        (key === "rating" && formData[key] === 0)
      ) {
        hasError = true;
      }
    });

    if (hasError) return;

    try {
      const res = await fetch("http://localhost:5001/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Submission failed");

      setSuccess("Feedback submitted successfully ✅");
      setFormData({ name: "", email: "", rating: 0, category: "", feedback: "" });
      setErrors({});
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"; // reset after submit
      }
    } catch (err) {
      setSuccess("");
      setErrors((prev) => ({ ...prev, submit: err.message }));
    }
  };

  return (
    <div
      className="feedback-container"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${food})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "20px",
      }}
    >
      {/* Form Section */}
      <div
        className="feedback-form-wrapper"
        style={{
          marginLeft: "auto",
          marginRight: "160px",
          maxWidth: "480px",
          width: "100%",
          background: "rgba(0, 0, 0, 0.65)",
          padding: "18px 20px",
          borderRadius: "10px",
          color: "#fff",
        }}
      >
        <h3 className="text-center mb-3" style={{ fontSize: "1.4rem" }}>
          Feedback Form
        </h3>

        {success && <div className="alert alert-success py-1">{success}</div>}
        {errors.submit && <div className="alert alert-danger py-1">{errors.submit}</div>}

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-group mb-2">
            <label htmlFor="name" className="form-label small">Name</label>
            <input
              type="text"
              id="name"
              className="form-control form-control-sm"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <small className="text-danger">{errors.name}</small>}
          </div>

          {/* Email */}
          <div className="form-group mb-2">
            <label htmlFor="email" className="form-label small">Email</label>
            <input
              type="email"
              id="email"
              className="form-control form-control-sm"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          {/* Rating */}
          <div className="form-group mb-2">
            <label className="form-label small">Overall Rating</label>
            <div style={{ display: "flex", gap: "4px", fontSize: "20px" }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRating(star)}
                  style={{
                    cursor: "pointer",
                    color: star <= formData.rating ? "#ffc107" : "#aaa",
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            {errors.rating && <small className="text-danger">{errors.rating}</small>}
          </div>

          {/* Category */}
          <div className="form-group mb-2">
            <label htmlFor="category" className="form-label small">Category</label>
            <select
              id="category"
              className="form-select form-select-sm"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Feedback Category</option>
              <option value="service">Service Quality</option>
              <option value="product">Product Feedback</option>
              <option value="support">Customer Support</option>
              <option value="website">Website Experience</option>
            </select>
            {errors.category && <small className="text-danger">{errors.category}</small>}
          </div>

          {/* Feedback */}
          <div className="form-group mb-2">
            <label htmlFor="feedback" className="form-label small">Your Feedback</label>
            <textarea
              id="feedback"
              ref={textareaRef}
              className="form-control form-control-sm"
              rows="2"
              placeholder="Write your feedback here..."
              value={formData.feedback}
              onChange={handleChange}
              required
            ></textarea>
            {errors.feedback && <small className="text-danger">{errors.feedback}</small>}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn btn-sm w-100 fw-bold"
            style={{ backgroundColor: "#0d6f65", color: "white" }}
            disabled={Object.values(errors).some((err) => err)}
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
