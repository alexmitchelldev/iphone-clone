import React from "react";
import "../index.css";
import data from "../data/data";

const Weather = () => {
  return (
    <div className="weather-screen">
      <div className="spacer"></div>
      <div className="search-bar">
        <input type="text" placeholder="Search location..." />
      </div>
      <div className="weather-display">
        <div className="weather-box temperature">
          <h2>25°C</h2>
        </div>
        <div className="weather-box weather-icon">
          <img src="/images/weather/sunny.png" alt="weather type icon"></img>
        </div>
        <div className="weather-box sunrise-sunset">
          <p>Sunrise: 6:00 AM</p>
          <p>Sunset: 8:00 PM</p>
        </div>
        <div className="weather-box tbc"></div>
      </div>
    </div>
  );
};

export default Weather;
