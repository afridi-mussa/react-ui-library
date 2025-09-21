import React from "react";
import "./FancyButton.css";

export default function FancyButton({ children, variant = "orange" }) {
  return (
    <button className={`fancy-btn fancy-${variant}`}>
      <span className="fancy-btn-bg"></span>
      <span className="fancy-btn-left"></span>
      <span className="fancy-btn-right"></span>
      <span className="fancy-btn-overlay"></span>
      <span className="fancy-btn-text">{children}</span>
    </button>
  );
}
