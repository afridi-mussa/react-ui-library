import React from "react";
import Button from "../../components/buttons/Button";

function ButtonsDemo() {
  return (
    <div>
    
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <Button label="Primary" variant="primary" />
        <Button label="Secondary" variant="secondary" />
        <Button label="Success" variant="success" />
        <Button label="Danger" variant="danger" />
        <Button label="Small" variant="primary" size="sm" />
        <Button label="Large" variant="success" size="lg" />
      </div>
    </div>
  );
}

export default ButtonsDemo;
