import React from "react";
import Card from "../../components/cards/Card";
import Button from "../../components/buttons/Button";

function CardsDemo() {
  return (
    <div>
     
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <Card 
          title="Nature Card" 
          description="Beautiful nature landscape."
          image="https://picsum.photos/400/200?random=1"
          footer={<Button label="Read More" variant="primary" />}
        />
        <Card 
          title="Technology Card" 
          description="Latest tech trends."
          image="https://picsum.photos/400/200?random=2"
          footer={<Button label="Explore" variant="success" />}
        />
        <Card 
          title="Travel Card" 
          description="Best places to visit."
          image="https://picsum.photos/400/200?random=3"
          footer={<Button label="Book Now" variant="danger" />}
        />
      </div>
    </div>
  );
}

export default CardsDemo;
