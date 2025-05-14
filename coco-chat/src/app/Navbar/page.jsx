// app/header/page.js
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "./style.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "darkMode" : "lightMode";
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen, isDarkMode]);

  return (
    <div className="nav-bar">
      <div className="nav-logo-container">
        <img src="/coco.png" alt="Logo" className="nav-logo" />
      </div>

      <div
        className="burger-menu"
        onClick={toggleMenu}
        role="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
      </div>

      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <Link href="/" onClick={toggleMenu}>
          HOME
        </Link>
        <Link href="/about" onClick={toggleMenu}>
          ABOUT
        </Link>
        <Link href="/courses" onClick={toggleMenu}>
          COURSES
        </Link>
        <button
          onClick={toggleTheme}
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
          style={{
            background: "none",
            border: "none",
            color: "var(--p-text-color)",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
