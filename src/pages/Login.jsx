import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import bgImage from "../assets/food-bg.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5001/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      // save token + role to localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("user_id", data.user_id);

      alert(data.message);
      navigate("/"); // redirect to homepage
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);

      const res = await fetch("http://localhost:5001/api/google-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: decoded.name,
          email: decoded.email,
          google_id: decoded.sub,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Google login failed");

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("user_id", data.user_id);

      alert("Google Login Successful");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="login-page d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div
        className="login-box p-4"
        style={{
          background: "rgba(0,0,0,0.6)",
          borderRadius: "10px",
          maxWidth: "400px",
          width: "100%",
          color: "#fff",
        }}
      >
        <h2 className="text-center mb-3">Login</h2>
        <p className="text-center" style={{ fontSize: "14px" }}>
          Enter your email below to login to your account
        </p>

        {error && (
          <div className="alert alert-danger text-center py-1">{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              title="Email must end with @gmail.com"
            />
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
              title="Password must contain at least one upper case letter, one lower case letter, and one special symbol"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn w-100 fw-bold mb-3"
            style={{ backgroundColor: "#0d6f65", color: "white" }}
          >
            Login
          </button>
        </form>

        {/* Google Login */}
        <div className="text-center mb-3">
          <GoogleLogin onSuccess={handleGoogleLogin} onError={() => setError("Google Login Failed")} />
        </div>

        {/* Signup link */}
        <p className="text-center mt-3" style={{ fontSize: "14px" }}>
          Don’t have an account?{" "}
          <a href="/register" style={{ color: "#0d6f65" }}>
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
