import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/Logo.jpg'; // Make sure to add your logo image in the assets folder

const Header = () => (
  <header>
    <div className="logo">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Burrow Space Logo" className="logo-image" />
        <span className="company-name">Burrow Space</span>
      </Link>
    </div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/career">Career</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;