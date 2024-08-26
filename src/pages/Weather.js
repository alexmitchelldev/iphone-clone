import React, { useState } from "react";
import "../index.css";

const APP_ID = null;
const BASE_URL = "http://api.openweathermap.org";

const buildLocationQueryUrl = (location) => {
  const url = `${BASE_URL}/geo/1.0/direct?`;

  const queryUrl = `${url}q=${location}&appid=${APP_ID}&limit=5`;

  return queryUrl;
};

const buildWeatherQueryUrl = (lat, lon) => {
  const url = `${BASE_URL}/data/2.5/weather?`;

  const queryUrl = `${url}lat=${lat}&lon=${lon}&appid=${APP_ID}&units=metric`;

  return queryUrl;
};

const buildTimeString = (hours, minutes) => {
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");

  return `${hours}:${minutes}`;
};

const Weather = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [temp, setTemp] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [data, setData] = useState([]);

  const handleSearchChange = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 2) {
      const queryUrl = buildLocationQueryUrl(value);
      const response = await fetch(queryUrl);
      setData(await response.json());

      const placeNames = data.map((location) => {
        return `${location.name} - ${location.state ? `${location.state}, ` : ``}${location.country}`;
      });

      setSuggestions(placeNames);
    } else {
      setSuggestions([]);
    }
  };

  const getLocationWeather = async (location, index) => {
    setSearchTerm(location);
    setSuggestions([]);

    const locationObject = data[index];

    if (
      locationObject &&
      locationObject.hasOwnProperty("lat") &&
      locationObject.hasOwnProperty("lon")
    ) {
      const lat = data[index]["lat"];
      const lon = data[index]["lon"];

      const weatherQueryUrl = buildWeatherQueryUrl(lat, lon);
      const response = await fetch(weatherQueryUrl);
      const responseJson = await response.json();

      if (`main` in responseJson && `temp` in responseJson.main) {
        const celsius = String(Number(responseJson.main.temp).toFixed(1));
        setTemp(`${celsius}°C`);
      }

      if (`sys` in responseJson) {
        if ("sunrise" in responseJson.sys && "sunset" in responseJson.sys) {
          const sunrise = new Date(responseJson.sys.sunrise * 1000);
          setSunrise(buildTimeString(sunrise.getHours(), sunrise.getMinutes()));
          const sunset = new Date(responseJson.sys.sunset * 1000);
          setSunset(buildTimeString(sunset.getHours(), sunset.getMinutes()));
        }
      }
    }
  };

  return (
    <div className="weather-screen">
      <div className="spacer"></div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search location..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {suggestions.length > 0 && (
          <ul className="suggestions-dropdown">
            {suggestions.map((location, index) => {
              return (
                <li
                  key={index}
                  onClick={() => getLocationWeather(location, index)}
                >
                  {location}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="weather-display">
        <div className="weather-box temperature">
          <h2>{temp}</h2>
        </div>
        <div className="weather-box weather-icon">
          {
            // <img src="/images/weather/sunny.png" alt="weather type icon"></img>
          }
        </div>
        <div className="weather-box sunrise-sunset">
          <p>Sunrise: {sunrise}</p>
          <p>Sunset: {sunset}</p>
        </div>
        <div className="weather-box tbc"></div>
      </div>
    </div>
  );
};

export default Weather;
