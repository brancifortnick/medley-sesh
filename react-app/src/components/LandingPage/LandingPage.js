import React from "react";
import "./LandingPage.css";
import background from '../../assets/carsblur.jpg';


const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1 id="welcome-text">Welcome To Medley</h1>
      <img src={background}></img>
    </div>
  );
};
export default LandingPage;
