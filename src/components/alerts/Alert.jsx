import React from "react";
import "./Alert.css";

const Alert = ({ type = "info", message, onClose }) => {
  return (
    <div className={`alert ${type}`}>
      <span className="alert-message">{message}</span>
      <button className="alert-close" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default Alert;
