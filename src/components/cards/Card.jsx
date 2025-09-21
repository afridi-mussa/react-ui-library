import React from "react";
import "./Card.css";

const Card = ({ title, description, image, footer }) => {
  return (
    <div className="card">
      {image && <img src={image} alt="card" className="card-img" />}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
