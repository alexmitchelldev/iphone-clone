// src/components/App.js
import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import data from "../data/data";

const App = ({ icon, label, link, type }) => {
  return (
    <Link
      to={link}
      className={type === data.appTypes.app ? "app-icon" : "widget-icon"}
    >
      <div className="icon">
        <img src={icon} alt={label} />
      </div>
      <div className="app-label">{label}</div>
    </Link>
  );
};

const Widget = ({ icon, label, link }) => {
  return (
    <Link to={link} className="widget-icon">
      <div className="icon">
        <img src={icon} alt={label} />
      </div>
      <div className="app-label">{label}</div>
    </Link>
  );
};

const icons = {
  app: App,
  widget: Widget,
};

export default icons;
