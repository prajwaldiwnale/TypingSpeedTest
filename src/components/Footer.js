import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div id="about-us" className="footer-section">
          <h3>About Us</h3>
          <p>
            We are dedicated to helping people improve their typing skills through
            our interactive typing speed test platform. Our goal is to make typing
            practice engaging and effective for everyone.
          </p>
        </div>
        
        <div id="contact" className="footer-section">
          <h3>Contact</h3>
          <div className="contact-info">
            <p>
              <i className="fas fa-envelope"></i>
              Email: contact@typingspeedtest.com
            </p>
            <p>
              <i className="fas fa-phone"></i>
              Phone: +1 (555) 123-4567
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              Address: 123 Typing Street, Digital City, 12345
            </p>
          </div>
          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Typing Speed Test. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 