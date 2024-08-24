// src/pages/Home.js
import React from "react";
import icons from "../components/App";
import "../index.css";
import data from "../data/data";

const Home = () => {
  return (
    <div className="grid-container">
      {data.appsData.map((app) => {
        return (
          <div
            key={app.id}
            className={`grid-item ${app.type === data.appTypes.widget ? "widget" : "app"}`}
            style={{ "background-color": app.background }}
          >
            <img src={app.icon} alt={app.label} />
            <span>{app.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
