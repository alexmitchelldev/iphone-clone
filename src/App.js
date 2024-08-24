// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

import TimeDisplay from "./components/TimeDisplay";

const App = () => {
  return (
    <Router>
      <div class="phone">
        <div class="screen">
          <TimeDisplay />
          <div class="notch">
            <div class="camera"></div>
          </div>
          <div class="status-bar">
            <img
              src="/images/apps/signal.png"
              alt="cellular signal icon"
              class="icon"
            ></img>
            <img
              src="/images/apps/wifi.png"
              alt="WiFi Icon"
              class="wifi signal icon"
            ></img>
            <img
              src="/images/apps/battery.png"
              alt="Battery Icon"
              class="battery icon"
            ></img>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
