import React from "react";
import "./Navbar.css";

const Navbar1 = () => {
  return (
    <nav className="navbar navbar1">
      <div className="logo">🌐 Brand</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar1;
