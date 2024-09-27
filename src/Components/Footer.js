import React from 'react';
import { Link } from 'react-scroll'; 
import { data } from './dataFooter';
import './Footer.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="footer">
   
      <div className="video-container">
        <video src={data[0].video} autoPlay loop muted playsInline className="video-background">
          Your browser does not support the video tag.
        </video>
      </div>

  
      <div className="footer-content">
      
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="destination" smooth={true} duration={500}>Destination</Link></li>
            <li><Link to="recent-links" smooth={true} duration={500}>Recent Links</Link></li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h4>Contact Info</h4>
          <p>Phone: 123-456-7890</p>
          <p>Email: arshadshaiikk@gmail.com</p>
        </div>

      
        <div className="footer-section social-links">
          
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTwitter /> 
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaFacebookF /> 
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedinIn /> 
          </a>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Travel&Explore . All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
