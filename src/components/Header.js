import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/Logo.jpg'; // Make sure to add your logo image in the assets folder

const Header = () => (
  <header>
    <div className="logo">
      <img src={logo} alt="Burrow Space Logo" />
      Burrow Space
    </div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/career">Career</Link></li> {/* Add Career link */}
      </ul>
    </nav>
  </header>
);

export default Header;