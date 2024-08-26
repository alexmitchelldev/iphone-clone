// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

import TopBar from "./components/Topbar";

// import TimeDisplay from "./components/TimeDisplay";

const App = () => {
  return (
    <Router>
      <div className="phone">
        <div className="screen">
          <TopBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<Weather />} />
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
