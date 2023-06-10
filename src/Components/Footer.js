import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper-all">
      <div
        style={{
          width: "100%",
          height: "100px",
          maxWidth: "85vw",
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          margin: "0 auto",
        }}
      >
        <div className="footer-section-one">
          <h1 className="footer-section-one">2023 © www.Develov.co.id</h1>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
    </div>
  );
};
export default Footer;