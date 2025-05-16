"use client";
import { useState } from "react";
import "./style.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // adjust this path if needed
import { useRouter } from "next/navigation"; // for client-side navigation

export default function LoginPage() {
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    identifier: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const { identifier, password } = credentials;

    // Simple email validation (optional)
    if (!identifier.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, identifier, password);
      setError("");
      router.push("/home"); // ✅ redirect on successful login
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid email or password.");
    }
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

          {error && (
            <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
          )}

          <div className="signup-text">
            Don't have an account? <a href="./SignUpPage">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}
