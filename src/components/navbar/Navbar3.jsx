import React from "react";
import "./Navbar.css";

const Navbar3 = () => {
  return (
    <nav className="navbar navbar3">
      <div className="logo">✨ GlassNav</div>
      <ul className="nav-links">
        <li><a href="#">Explore</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Blog</a></li>
        <li><a className="btn-gradient" href="#">Sign Up</a></li>
      </ul>
    </nav>
  );
};

export default Navbar3;
