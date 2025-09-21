import React, { useState } from "react";
import "./FlipCard.css";

const FlipCard = ({ title, subtitle, description, features, variant = "purple" }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""} ${variant}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Front Side */}
      <div className="flip-card-front">
        <div className="flip-card-content">
          <h3>{title || "Build MVPs Fast"}</h3>
          <p>{subtitle || "Launch your idea in record time"}</p>
        </div>
      </div>

      {/* Back Side */}
      <div className="flip-card-back">
        <h3>{title || "Build MVPs Fast"}</h3>
        <p>{description || "A simple developer-first component library."}</p>
        <ul>
          {(features || [
            "Copy & Paste Ready",
            "Developer-First",
            "MVP Optimized",
            "Zero Setup Required",
          ]).map((f, i) => (
            <li key={i}>⚡ {f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FlipCard;
