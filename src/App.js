// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

const App = () => {
  return (
    <Router>
      <div class="phone">
        <div class="screen">
          <div class="notch">
            <div class="camera"></div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
