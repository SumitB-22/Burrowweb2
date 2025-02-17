import React from 'react';
import './AboutSection.css';
import './ContactSection.css';

const AboutSection = () => (
  <section className="hero-section">
    <div className="text">
      <h1>About Us</h1>
      <p>Burrow Space is a forward-thinking platform dedicated to empowering businesses with innovative solutions that drive growth, efficiency, and success. Our mission is to simplify complex challenges by delivering scalable and reliable tools tailored to the modern enterprise.</p>
      <p>We pride ourselves on fostering collaboration, creativity, and adaptability, ensuring that every client can achieve their goals in today's fast-paced digital world.</p>
    </div>
    <img src="/image1.png" alt="Team introduction" />
  </section>
);

const ContactSection = ({ name, email, phone, imgSrc }) => (
  <section className="contact-section">
    <img src={imgSrc} alt={name} />
    <div className="details">
      <h3>{name}</h3>
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
      <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p>
    </div>
  </section>
);

export default ContactSection;