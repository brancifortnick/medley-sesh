import React from "react";
import background from '../../assets/james-owen.jpg';
import "./LandingPage.css";


const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1 id='welcome-text'>Hello</h1>
      <img alt ='_blank'className='background-image-landing'src={background}></img>
    </div>
  );
};
export default LandingPage;
