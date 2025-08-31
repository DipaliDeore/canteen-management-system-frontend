import React, { useState } from "react";
import food from "../assets/food-bg.png";

function Feedback() {
  const [rating, setRating] = useState(0);

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
          maxWidth: "480px", // ✅ slightly smaller width
          width: "100%",
          background: "rgba(0, 0, 0, 0.65)",
          padding: "18px 20px", // ✅ reduced padding
          borderRadius: "10px",
          color: "#fff",
        }}
      >
        <h3 className="text-center mb-3" style={{ fontSize: "1.4rem" }}>
          Feedback Form
        </h3>

        <form>
          {/* Name */}
          <div className="form-group mb-2">
            <label htmlFor="name" className="form-label small">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control form-control-sm"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group mb-2">
            <label htmlFor="email" className="form-label small">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control form-control-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Rating */}
          <div className="form-group mb-2">
            <label className="form-label small">Overall Rating</label>
            <div style={{ display: "flex", gap: "4px", fontSize: "20px" }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setRating(star)}
                  style={{
                    cursor: "pointer",
                    color: star <= rating ? "#ffc107" : "#aaa",
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          {/* Category */}
          <div className="form-group mb-2">
            <label htmlFor="category" className="form-label small">
              Category
            </label>
            <select id="category" className="form-select form-select-sm" required>
              <option value="">Select Feedback Category</option>
              <option value="service">Service Quality</option>
              <option value="product">Product Feedback</option>
              <option value="support">Customer Support</option>
              <option value="website">Website Experience</option>
            </select>
          </div>

          {/* Feedback */}
          <div className="form-group mb-2">
            <label htmlFor="feedback" className="form-label small">
              Your Feedback
            </label>
            <textarea
              id="feedback"
              className="form-control form-control-sm"
              rows="2" // ✅ much shorter
              placeholder="Write your feedback here..."
              required
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn btn-sm w-100 fw-bold"
            style={{ backgroundColor: "#0d6f65", color: "white" }}
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
