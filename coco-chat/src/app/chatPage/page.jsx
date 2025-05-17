"use client";

import React, { useState, useEffect } from "react";
import "./style.css";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    async function fetchMessages() {
      const response = await fetch("/api/getMessages");
      const data = await response.json();
      setMessages(data);
    }
    fetchMessages();
  }, []);

  const handleSendMessage = async () => {
    if (input.trim()) {
      await fetch("/api/saveMessages", {
        method: "POST",
        body: JSON.stringify({ message: input }),
        headers: { "Content-Type": "application/json" },
      });

      setMessages([...messages, { text: input }]);
      setInput("");
    }
  };
  

  return (
    <>
      <div className="navbar">
        <h2>Coco-Chat</h2>
      </div>

      <div className="chat-container">
        {/* Sidebar for messages */}
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              {msg.text}
            </div>
          ))}
        </div>

        {/* Main chat area with input */}
        <div className="chat-main">
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </>
  );
}
