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

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMenu();
    }
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
        <img
          src={isDarkMode ? "/coco.png" : "/coco png.png"}
          alt="Logo"
          className="nav-logo"
        />
      </div>

      <div
        className="burger-menu"
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        role="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        tabIndex={0}
      >
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
      </div>

      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <Link href="/" onClick={toggleMenu}>
          HOME
        </Link>
        <Link href="/aboutUs" onClick={toggleMenu}>
          ABOUT
        </Link>
        <Link href="/contact" onClick={toggleMenu}>
          Contact Us
        </Link>
          <Link href="/LoginPage" onClick={toggleMenu}>
          Login
        </Link>
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          <img
            className="shift-logo"
            src={
              isDarkMode
                ? "https://img.icons8.com/?size=100&id=648&format=png&color=ffffff"
                : "https://img.icons8.com/?size=100&id=45475&format=png&color=000000"
            }
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
