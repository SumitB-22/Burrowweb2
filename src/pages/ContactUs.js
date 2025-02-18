import React from 'react';
import './Contact.css';
import ContactSection from '../components/ContactSection';
import man from '../assets/man.png';
import manager from '../assets/manager.png';
import boy from '../assets/boy.png';

const ContactUs = () => (
  <main>
        <h1>Contact Us</h1>
        <p>If you have any questions or need assistance, feel free to reach out to our team below.</p>

        <section className="contact-section">
            <img src={man} alt="Person 1" />
            <div className="details">
                <h3>Aryan Goyal</h3>
                <p>Email: aryangoyalbusiness@gmail.com</p>
                <p>Phone: +91 6396667308</p>
            </div>
        </section>

        <section className="contact-section">
            <img src={manager} alt="Person 2" />
            <div className="details">
                <h3>Tejasvi Singh</h3>
                <p>Email: Tejayashsingh@gmail.com</p>
                <p>Phone: +91 6396667308</p>
            </div>
        </section>

        <section className="contact-section">
            <img src={boy} alt="Person 3" />
            <div className="details">
                <h3>Prince Pratap</h3>
                <p>Email: princepratapism@gmail.com</p>
                <p>Phone: +91 7668629313</p>
            </div>
        </section>
    </main>
);

export default ContactUs;