// src/pages/Home.js
import React from "react";
import AppIcon from "../components/AppIcon";
import "../index.css";

const Home = () => {
  return (
    <div className="home">
      <AppIcon
        icon="/icons/portfolio.png"
        label="Portfolio"
        link="/portfolio"
      />
      <AppIcon icon="/icons/about.png" label="About Me" link="/about" />
      <AppIcon icon="/icons/contact.png" label="Contact" link="/contact" />
      <AppIcon icon="/icons/cv.png" label="CV" link="/cv" />
    </div>
  );
};

export default Home;
