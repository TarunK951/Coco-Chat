"use client";
import { useState } from "react";
import "./style.css"; // Import the CSS file

export default function LoginPage() {
  const [credentials, setCredentials] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    console.log("Logging in with:", credentials);
    alert("Login button clicked!");
  };

  return (
    <div>
      <div className="login-page">
        <div className="login-container">
          <h2 className="login-title">Login</h2>

          <input
            className="login-input"
            type="text"
            name="identifier"
            placeholder="Gmail or Mobile Number"
            value={credentials.identifier}
            onChange={handleChange}
          />

          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
          />

          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <button className="login-button" onClick={handleLogin}>
            Login
          </button>

          <div className="signup-text">
            Don't have an account? <a href="./SignUpPage">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}
