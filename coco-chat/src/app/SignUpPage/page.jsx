"use client";
import { auth } from "@/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

import "./style.css";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    emailOrMobile: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    const { emailOrMobile, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!emailOrMobile.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, emailOrMobile, password);
      setError("");
      alert("Signup successful!");
      router.push("./LoginPage"); // ✅ Redirect to login page
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>

      <input
        className="signup-input"
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
      />

      <input
        className="signup-input"
        type="text"
        name="emailOrMobile"
        placeholder="Email or Mobile Number"
        value={formData.emailOrMobile}
        onChange={handleChange}
      />

      <input
        className="signup-input"
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <input
        className="signup-input"
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />

      <div className="terms">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms"> I agree to the Terms and Conditions</label>
      </div>

      <button className="signup-button" onClick={handleSignup}>
        Sign Up
      </button>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      <div className="login-text">
        Already have an account? <a href="./LoginPage">Login</a>
      </div>
    </div>
  );
}
