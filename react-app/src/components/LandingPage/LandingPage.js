import React from "react";
import background from "../../assets/james-owen.jpg";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1 id="welcome-text">
        Welcome to Medley, a place where you can upload your favorite musician(s).
        Navigate to your profile page to upload your favorite musicians mp3 and other audio files you would like to showcase.
        Easily access all of your musicians by navigating to your profile page and choosing your desired artist.
      </h1>
      <img
      style={{minWidth: 400, maxWidth:725}}
        alt="_blank"
        className="background-image-landing"
        src={background}
      ></img>
    </div>
  );
};
export default LandingPage;
