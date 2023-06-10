import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper-all">
      <div className="footer-section-one">
        <div className="about-section-text-container">
        <h1 className="footer-section-one">
        2023 © www.Develov.co.id
        </h1>
        </div>
      </div>
        <div className="footer-icons">
        <BsTwitter />
        <SiLinkedin />
        <BsYoutube />
        <FaFacebookF />
    </div>
  </div>
     
  );
};

export default Footer;
