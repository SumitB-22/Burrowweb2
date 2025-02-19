import React from 'react';
import Hero from '../components/Hero';
import './Home.css';
import inva from '../assets/inva.png';
import middle from '../assets/middle.jpeg';
import home1 from '../assets/home1.png'; // Add your image paths here
import home2 from '../assets/home2.png'; // Add your image paths here
import home3 from '../assets/home3.png'; // Add your image paths here

const Home = () => (
  <main>
    <Hero />

    <section className="image-section">
      <div className="image-grid">
        <img src={home1} alt="who" />
        <img src={home2} alt="let the" />
        <img src={home3} alt="dogs out" className="image-center" />
      </div>
    </section>

    <section className="middleware-section">
      <h2>Upcoming!</h2>
      <h3>Middleware Solution</h3>
      <div className="text">
        <div className="text-part">
          <p>
            We're building a powerful open-source solution that helps businesses communicate effectively and make smarter decisions in a fast-changing world. Our platform ensures secure, real-time data communication using high-speed messaging, live event processing, and a private cloud.
          </p>
        </div>
        <div className="text-part">
          <p>
            Businesses today face major challenges—managing massive amounts of instant data, responding quickly to opportunities or risks, and keeping sensitive information secure. E-commerce and live-order businesses, in particular, need scalable and cost-effective systems.
          </p>
        </div>
        <div className="text-part">
          <p>
            Our platform solves these issues by delivering fast, precise, and secure data without relying on third-party services. With our personal cloud, businesses maintain full control over their data while reducing costs. Most importantly, we turn raw data into actionable insights, helping businesses grow confidently in an ever-evolving market.
          </p>
        </div>
      </div>
      <img src={middle} alt="Middleware Solution" />
    </section>

    <section className="trusted-section">
      <h2>Trusted and Mentored By</h2>
      <div className="company">
        <img src={inva} alt="Company Name" />
      </div>
    </section>
  </main>
);

export default Home;