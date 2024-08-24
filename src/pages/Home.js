// src/pages/Home.js
import React from "react";
import icons from "../components/App";
import "../index.css";
import appsData from "../data/data";

const Home = () => {
  return (
    <div className="home">
      {appsData.map((app) => {
        return <AppIcon icon={app.icon} label={app.label} link={app.link} />;
      })}
    </div>
  );
};

export default Home;
