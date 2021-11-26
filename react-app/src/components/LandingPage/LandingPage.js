import React from "react";
import background from '../../assets/james-owen.jpg';
import "./LandingPage.css";


const LandingPage = () => {
  return (
    <div className="landing-container">
      <img style={{width: "auto"}}className='background-image-landing'src={background}></img>
    </div>
  );
};
export default LandingPage;
