import React from "react";
import AboutBackground from "../Assets/2.png";
import AboutBackgroundImage from "../Assets/download.png";
import qr from "../Assets/qr.png";
import playstore from "../Assets/googleplay.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading-download">
          Download Sekarang Juga
        </h1>
        <p className="primary-text">
        Dan mulai kembangkan skill designmu bersama kami
        </p>
        <div className="about-background-image-download">
        <img src={qr} alt="" />
        </div>

        <div className="about-background-image-download">
        <img src={playstore} alt="" />
        </div>

      </div>
    </div>
  );
};

export default About;
