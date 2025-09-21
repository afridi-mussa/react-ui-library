import React from "react";
import "./Button.css";

const Button = ({ label, onClick, variant = "primary", size = "md" }) => {
  return (
    <button className={`btn ${variant} ${size}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
