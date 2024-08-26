// src/pages/Home.js
import React from "react";
import "../index.css";
import data from "../data/data";

const Home = () => {
  return (
    <>
      <div className="spacer"></div>
      <div className="grid-container">
        {data.appsData.map((app) => {
          return (
            <div
              key={app.id}
              className={`grid-item ${app.type === data.appTypes.widget ? "widget" : "app"}`}
              style={{ backgroundColor: app.background }}
            >
              <a href={app.link}>
                <img src={app.icon} alt={app.label} />
              </a>
              <span>{app.label}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
