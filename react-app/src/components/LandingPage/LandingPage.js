import React from "react";
import background from "../../assets/james-owen.jpg";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1 id="welcome-text">
        Welcome to Medley, a place where you can upload your favorite musician,{" "}
        navigate to your artists' page and add their mp3s and other audio files tp enjoy!
      </h1>
      <img
        alt="_blank"
        className="background-image-landing"
        src={background}
      ></img>
    </div>
  );
};
export default LandingPage;
