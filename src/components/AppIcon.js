// src/components/AppIcon.js
import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const AppIcon = ({ icon, label, link }) => {
  return (
    <Link to={link} className="app-icon">
      <div className="icon">
        <img src={icon} alt={label} />
      </div>
      <div className="label">{label}</div>
    </Link>
  );
};

export default AppIcon;
