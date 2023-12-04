import React from "react";
import AboutBackground from "../Assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-text-container">
        <h1 className="primary-heading">
        Follow these easy steps
        </h1>
        <p className="primary-text">
       # Register yourself by filling the required informations
        </p>
        <p className="primary-text">
       # Sign in as use
        </p>
        <p className="primary-text">
       # Go to vote option on dashboard
        </p>
        <p className="primary-text">
       # Give security key
        </p>
        <p className="primary-text">
       # Vote your candidate and submit
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
