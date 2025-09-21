import React from "react";
import FlipCard from "../../components/flipcards/FlipCard";
import "./DemoFlipCard.css";

const DemoFlipCard = () => {
  return (
    <div className="flipcard-demo">
      <h2>Flip Cards Demo</h2>
      <div className="flipcard-grid">
        <FlipCard variant="purple" />
        <FlipCard
          variant="red"
          title="Developer Ready"
          subtitle="Plug & Play components"
          description="Our components are lightweight and ready to use."
          features={["Reusable", "Customizable", "Responsive", "Modern UI"]}
        />
        <FlipCard
          variant="yellow"
          title="Performance First"
          subtitle="Optimized for speed"
          description="No extra dependencies. Just React + CSS."
          features={["Fast", "Simple", "Clean", "Minimal"]}
        />
      </div>
    </div>
  );
};

export default DemoFlipCard;
