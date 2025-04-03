import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-text">Typing Speed Test</span>
      </div>
      <ul className="nav-links">
        <li><a href="/" className="nav-link">Home</a></li>
        <li><a onClick={() => scrollToSection('about-us')} className="nav-link">About Us</a></li>
        <li><a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar; 