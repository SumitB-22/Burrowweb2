import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <p>&copy; 2025 Burrow Space. All rights reserved.</p>
    <Link to="/contact" className="learn-more-button">Contact Us</Link>
  </footer>
);

export default Footer;