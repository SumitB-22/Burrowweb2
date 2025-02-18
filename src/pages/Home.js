import React from 'react';
import Hero from '../components/Hero';
import inva from '../assets/inva.png';

const Home = () => (
  <main>
    <Hero />
    <section className="trusted-section">
      <h2>Trusted and Mentored By</h2>
      <div className="company">
        <img src={inva} alt="Company Name" />
      </div>
    </section>
  </main>
);

export default Home;