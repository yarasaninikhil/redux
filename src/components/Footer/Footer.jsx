import React from 'react';
import '../Footer/Footer.css'; // Make sure you have the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a >Returns Policy</a>
        <a >Terms of Use</a>
        <a>Security</a>
        <a>Privacy</a>
      </div>
      <div className="footer-bottom">
        <p>© 2007-2024 Playstore</p>
        <p>Need help? <a >Visit the Help Center</a> or <a >Contact Us</a></p>
      </div>
    </footer>
  );
};

export default Footer;
