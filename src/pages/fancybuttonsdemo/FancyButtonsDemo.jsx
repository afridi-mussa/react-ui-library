import React from "react";
import FancyButton from "../../components/fancybuttons/FancyButton";

export default function ButtonsDemo() {
  return (
    <div>
    
      <FancyButton variant="orange">Hover Me!</FancyButton>
      <FancyButton variant="blue">Click Here</FancyButton>
      <FancyButton variant="green">Success</FancyButton>
      <FancyButton variant="purple">Explore</FancyButton>
      <FancyButton variant="red">Delete</FancyButton>
    </div>
  );
}
