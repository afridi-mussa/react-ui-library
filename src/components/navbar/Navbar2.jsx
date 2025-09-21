import React from "react";
import "./Navbar.css";

const Navbar2 = () => {
  return (
    <nav className="navbar navbar2">
      <div className="logo">🔥 FireNav</div>
      <ul className="nav-links">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Teams</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </nav>
  );
};

export default Navbar2;
