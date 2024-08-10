// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <div class="phone">
        <div class="screen">
          <div class="time">15:18</div>
          <div class="notch">
            <div class="camera"></div>
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
