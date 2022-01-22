import React from "react";
import background from "../../assets/james-owen.jpg";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1 id="welcome-text">
        Welcome to Medley, a place where you can upload your favorite musician(s).
        Navigate to your profile page to upload artists and audio files you would like to showcase.
        Easily access all of your musicians by navigating to your profile page and choosing your desired artist.
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
