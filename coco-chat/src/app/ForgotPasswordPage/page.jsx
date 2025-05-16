// ForgotPasswordPage/page.jsx
"use client";
import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../../firebaseConfig"; // not '../firebaseConfig'
import "./style.css";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async () => {
    const auth = getAuth(app);
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset link sent to your email.");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="forgot-container">
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="forgot-input"
      />
      <button onClick={handleReset} className="forgot-button">
        Send Reset Link
      </button>
      {message && <p className="forgot-message">{message}</p>}
    </div>
  );
}
