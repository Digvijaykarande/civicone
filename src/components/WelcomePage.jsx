import React from "react";
import "../stylesheets/WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="welcome-box">
      {/* Logo and Name */}
      <div className="logo-row">
        <div className="circle">C</div>
        <span className="brand">CivicOne</span>
      </div>

      {/* Tagline */}
      <h2 className="tagline">
        Your Issues. <br />
        Our Action. <br />
        One Platform
      </h2>

      {/* Button */}
      <button className="get-started-btn">Get Started</button>
    </div>
  );
};

export default WelcomePage;
