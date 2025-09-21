import React from "react";
import Badge from "../../components/badge/Badge";

function BadgesDemo() {
  return (
    <div>
      
      <Badge type="primary" label="New" />
      <Badge type="success" label="Active" />
      <Badge type="warning" label="Pending" />
      <Badge type="error" label="Error" />
      <Badge type="gradient" label="Premium" />
    </div>
  );
}

export default BadgesDemo;
