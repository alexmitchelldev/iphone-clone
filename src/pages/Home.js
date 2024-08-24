// src/pages/Home.js
import React from "react";
import icons from "../components/App";
import "../index.css";
import data from "../data/data";

const Home = () => {
  const rows = [];
  let currentRow = [];
  let currentWidth = 0;

  data.appsData.forEach((app) => {
    if (currentWidth + app.type > 4) {
      rows.push(currentRow);
      currentRow = [];
      currentWidth = 0;
    }

    currentRow.push(app);
    currentWidth += app.type;

    if (currentRow.length > 0) {
      rows.push(currentRow);
    }
  });

  return (
    <div className="home">
      {data.appsData.map((app) => {
        return (
          <icons.app
            icon={app.icon}
            label={app.label}
            link={app.link}
            type={app.type}
          />
        );
      })}
    </div>
  );
};

export default Home;
