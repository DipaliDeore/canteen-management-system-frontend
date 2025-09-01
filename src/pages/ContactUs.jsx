import React, { useState } from "react";
import bgImage from "../assets/food-bg.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Regex patterns
  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (field, value) => {
    let message = "";

    switch (field) {
      case "name":
        if (!nameRegex.test(value)) message = "Name must contain only letters and spaces";
        break;
      case "email":
        if (!emailRegex.test(value)) message = "Invalid email format";
        break;
      case "subject":
        if (!value.trim()) message = "Subject is required";
        break;
      case "message":
        if (value.trim().length < 5) message = "Message must be at least 5 characters";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    validateField(id, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");

    Object.keys(formData).forEach((key) => validateField(key, formData[key]));
    if (Object.values(errors).some((err) => err)) return;

    try {
      const res = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setSuccess("Message sent successfully ✅");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (err) {
      setSuccess("");
      setErrors((prev) => ({ ...prev, submit: err.message }));
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
      {/* Top Half Background with Title */}
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          height: "45vh",
          position: "relative",
        }}
      >
        {/* Lighter Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255,255,255,0.6)",
          }}
        ></div>

        {/* Title over Image */}
        <div
          style={{
            position: "relative",
            textAlign: "center",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <h2 className="fw-bold" style={{ color: "black" }}>
            Contact Us
          </h2>
          <p style={{ color: "black" }}>
            Get in touch with our team for support or inquiries
          </p>
        </div>

        {/* Contact Box floating below title */}
        <div
          className="d-flex justify-content-center"
          style={{
            position: "absolute",
            left: "50%",
            top:"250PX", // pulls box into the white section
            transform: "translateX(-50%)",
            width: "100%",
          }}
        >
          <div
            className="contact-box p-4"
            style={{
              background: "rgba(255,255,255,0.98)",
              borderRadius: "10px",
              maxWidth: "600px",
              width: "90%",
              boxShadow: "10px 10px 50px rgba(0,0,0,0.18)",
            }}
          >
            {success && <div className="alert alert-success py-1">{success}</div>}
            {errors.submit && <div className="alert alert-danger py-1">{errors.submit}</div>}

            <form onSubmit={handleSubmit}>
              {/* Row for Name + Email */}
              <div className="row mb-2">
                <div className="col">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>
                <div className="col">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
              </div>

              {/* Subject */}
              <div className="mb-2">
                <input
                  type="text"
                  id="subject"
                  className="form-control"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                {errors.subject && <small className="text-danger">{errors.subject}</small>}
              </div>

              {/* Message */}
              <div className="mb-2">
                <textarea
                  id="message"
                  className="form-control"
                  rows="3"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.message && <small className="text-danger">{errors.message}</small>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn w-100 fw-bold"
                style={{ backgroundColor: "#0d6f65", color: "white" }}
                disabled={Object.values(errors).some((err) => err)}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Add padding so box doesn't overlap next content */}
      <div style={{ height: "100px" }}></div>
    </div>
  );
}

export default Contact;
