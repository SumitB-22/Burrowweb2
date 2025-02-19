import React from 'react';
import Hero from '../components/Hero';
import './Home.css';
import inva from '../assets/inva.png';
import middle from '../assets/middle.jpeg';


const Home = () => (
  <main>
    <Hero />

    <section className="middleware-section">
      <div className="text">
        <h2>Middleware Solution</h2>
        <p>
        We're building a powerful open-source solution that helps businesses communicate effectively and make smarter decisions in a fast-changing world. Our platform ensures secure, real-time data communication using high-speed messaging, live event processing, and a private cloud.  

        Businesses today face major challenges—managing massive amounts of instant data, responding quickly to opportunities or risks, and keeping sensitive information secure. E-commerce and live-order businesses, in particular, need scalable and cost-effective systems.  

        Our platform solves these issues by delivering fast, precise, and secure data without relying on third-party services. With our personal cloud, businesses maintain full control over their data while reducing costs. Most importantly, we turn raw data into actionable insights, helping businesses grow confidently in an ever-evolving market.
        </p>
      </div>
      <img src={middle} alt="Middleware Solution" />
    </section>

    <section className="upcoming-section">
      <h2>Upcoming Projects!</h2>
      <p>Innovation in progress. We're cooking up something awesome!</p>
    
    </section>

    <section className="trusted-section">
      <h2>Trusted and Mentored By</h2>
      
      <br />
      <br />

      <div className="company">
        <img src={inva} alt="Company Name" />
      </div>
    </section>
  </main>
);

export default Home;