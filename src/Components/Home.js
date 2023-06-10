import React from "react";
import BannerBackground from "../Assets/1.png";
import BannerImage from "../Assets/welcome.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Mari Membuat Desain Anda Menjadi Lebih Baik
          </h1>
          <p className="primary-text">
          Kami adalah platform yang dapat menghubungkan mentor dan mentee secara online untuk berkarier
          Melalui mentoring dan bimbingan dibagian design grafis
          </p>
          <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>

        </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
