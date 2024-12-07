import React from "react";
import "./HeroSection.css";
import Navbar from "./Navbar";
import Scan1 from '../components/pics/Scan.png';
import App1 from '../components/pics/App Store.jpg';
const HeroSection = () => {
  return (
    <>
    
    <div className="hero">
        <Navbar />
        <div className="hero-section">
          <div className="hero-content">
            <h2 className="now">AVAILABLE NOW</h2>
            <h1 className="game">
              Get the Epic Games <br /> Store for iPhone, iPad <br /> and Android
            </h1>
            <div className="scanner">
              <img src={Scan1} alt="QR code" />
              <p className="scan">
                Scan QR code on a supported device to be taken to the <br /> install page.
              </p>
            </div>
            <p className="para">
              Also available on Mac OS, Android, iPhone (EU only) and iPad (EU only).
            </p>
          </div>
          <div className="App-img">
            <img src={App1} alt="App Store" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
