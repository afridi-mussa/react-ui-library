import React from "react";
import "./Badge.css";

const Badge = ({ type = "primary", label }) => {
  return <span className={`badge ${type}`}>{label}</span>;
};

export default Badge;
