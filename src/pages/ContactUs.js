import React from 'react';
import './ContactUs.css';   
import aryan from '../assets/aryan.jpeg';
import tejashvi from '../assets/tejashvi.jpeg';
import prince from '../assets/prince.jpeg';

const ContactUs = () => (
  <main>
        <h1>Contact Us</h1>
        <p>If you have any questions or need assistance, feel free to reach out to our team below.</p>

        <section className="contact-section">
            <img src={aryan} alt="Person 1" />
            <div className="details">
                <h3>Aryan Goyal</h3>
                <p>Email: aryangoyalbusiness@gmail.com</p>
                <p>Phone: +91 6396667308</p>
            </div>
        </section>

        <section className="contact-section">
            <img src={tejashvi} alt="Person 2" />
            <div className="details">
                <h3>Tejashvi Singh</h3>
                <p>Email: Tejayashsingh@gmail.com</p>
                <p>Phone: +91 6394468891</p>
            </div>
        </section>

        <section className="contact-section">
            <img src={prince} alt="Person 3" />
            <div className="details">
                <h3>Prince Pratap</h3>
                <p>Email: princepratapism@gmail.com</p>
                <p>Phone: +91 7668629313</p>
            </div>
        </section>
    </main>
);

export default ContactUs;