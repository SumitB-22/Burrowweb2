import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => (
  <section className="hero">
    <h1>Welcome to Burrow Space!</h1>
    <p>Your Data, Your Control—Seamlessly.</p>
    <Link to="/about" className="learn-more-button">Learn More</Link>
  </section>
);

export default Hero;