// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/about">About Me</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/cv">CV</Link>
    </div>
  );
};

export default Navbar;
