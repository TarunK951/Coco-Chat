"use client";
import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import { BsChatDots } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import { AiOutlineBarChart, AiOutlineMessage, AiOutlineGlobal, AiOutlineEye, AiOutlineLineChart, AiOutlineTranslation } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";

const functionalities = [
  {
    title: "Live Chat",
    desc: "Interact with the chatbot in real-time.",
    fullContent: "Live Chat lets you talk to Coco-Chat in real-time, allowing seamless interactions for FAQs, support, and more.",
    icon: <AiOutlineMessage />,
  },
  {
    title: "Embed Feature",
    desc: "Integrate Coco-Chat into your own website.",
    fullContent: "With the embed feature, you can drop Coco-Chat into any web project using just a snippet.",
    icon: <AiOutlineGlobal />,
  },
  {
    title: "Custom Responses",
    desc: "Add your own custom-trained replies.",
    fullContent: "Coco-Chat supports user-trained responses so your assistant can reply exactly how you want.",
    icon: <AiOutlineBarChart />,
  },
  {
    title: "Dark Mode",
    desc: "Switch between light and dark UI themes.",
    fullContent: "Enable a sleek dark theme for better visual experience, especially at night.",
    icon: <AiOutlineEye />,
  },
  {
    title: "Analytics",
    desc: "View user engagement and usage stats.",
    fullContent: "Track how users interact with Coco-Chat using built-in analytics tools.",
    icon: <AiOutlineLineChart />,
  },
  {
    title: "Multi-language",
    desc: "Support for multiple languages.",
    fullContent: "Make Coco-Chat multilingual to reach more users around the world.",
    icon: <AiOutlineTranslation />,
  },
];

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const detailRefs = useRef([]);

  useEffect(() => {
    // Close on ESC key
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const scrollToDetails = (index) => {
    if (detailRefs.current[index]) {
      detailRefs.current[index].scrollIntoView({ behavior: "smooth" });
      setActiveIndex(null);
    }
  };

  return (
    <>
      {activeIndex !== null && (
        <div className="overlay" onClick={() => setActiveIndex(null)}></div>
      )}

      <div className="about-wrapper">
        <h1 className="about-heading">Know About Us</h1>

        <div className="grid-container">
          {functionalities.map((item, index) => {
            const isActive = activeIndex === index;
            const isBlurred = activeIndex !== null && !isActive;

            return (
              <div
                key={index}
                className={`grid-item ${isActive ? "active" : ""} ${isBlurred ? "blurred" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="grid-action">{item.icon}</div>
                <h3 className="grid-title">{item.title}</h3>
                <p className="grid-desc">{item.desc}</p>

                {isActive && (
                  <div className="popup-content">
                    <p>{item.fullContent}</p>
                    <button className="know-more-btn" onClick={() => scrollToDetails(index)}>
                      Know More
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Sections for Each Grid */}
      <div className="details-wrapper">
        {functionalities.map((item, index) => (
          <div
            key={index}
            ref={(el) => (detailRefs.current[index] = el)}
            className="details-section"
          >
            <h2>{item.title}</h2>
            <p>{item.fullContent}</p>
            <p>
              Here you can expand with more features, screenshots, demos, or
              tutorials related to <strong>{item.title}</strong>.
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
