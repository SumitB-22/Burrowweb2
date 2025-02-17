// filepath: /d:/Website/React/BurrowSpace_website/burrowsite/src/pages/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => (
  <main className="contact-page">
    <h1>Contact Us</h1>
    <form className="contact-form">
      <label>
        Full Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Message:
        <textarea name="message" required></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  </main>
);

export default Contact;