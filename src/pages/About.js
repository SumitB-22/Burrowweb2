import React from 'react';
import './About.css';
import aboutus from '../assets/aboutus.jpg';
import image2 from '../assets/image2.jpeg';
import tech from '../assets/tech.jpg';
import commitment from '../assets/commitment.jpg';
import Footer from '../components/Footer';

const Section = ({ title, content, image, align }) => (
  <section className={`content-section ${align}`}>
    <div className="content-container">
      <div className="text-content">
        <h2>{title}</h2>
        {content}
      </div>
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
    </div>
  </section>
);

const About = () => (
  <main className="about-page">
    <Section
      title="About Us"
      content={
        <>
          <p>Welcome to Burrow Space! We're dedicated to revolutionizing digital solutions through cutting-edge technology and unwavering commitment. Our team of industry experts combines technical excellence with creative problem-solving to deliver exceptional results.</p>
          <p>Founded on principles of innovation and integrity, we strive to create meaningful impact by transforming complex challenges into elegant solutions that drive business growth and technological advancement.</p>
        </>
      }
      image={aboutus}
      align="left"
    />

    <Section
      title="Our Values"
      content={
        <>
          <p>At Burrow Space, our core values form the foundation of every interaction:</p>
          <ul className="value-list">
            <li>Innovation Through Collaboration</li>
            <li>Transparent Communication</li>
            <li>Sustainable Progress</li>
            <li>Client-Centric Focus</li>
          </ul>
          <p>We believe in building long-term partnerships based on trust, delivering measurable results that stand the test of time.</p>
        </>
      }
      image={image2}
      align="right"
    />

    <Section
      title="Our Technology"
      content={
        <>
          <p>Harnessing the power of advanced technologies:</p>
          <div className="tech-stack">
            <span>Cloud Architecture</span>
            <span>AI/ML Integration</span>
            <span>Real-time Analytics</span>
            <span>Blockchain Security</span>
          </div>
          <p>Our platform combines scalability with military-grade security, offering seamless integration and unparalleled performance across all digital environments.</p>
        </>
      }
      image={tech}
      align="left"
    />

    <Section
      title="Our Commitment"
      content={
        <>
          <p>We pledge to:</p>
          <ul className="commitment-list">
            <li>Deliver excellence through continuous innovation</li>
            <li>Maintain ethical business practices</li>
            <li>Support sustainable digital transformation</li>
            <li>Provide 24/7 expert support</li>
          </ul>
          <p>Our team is dedicated to your success, offering customized solutions that evolve with your business needs.</p>
        </>
      }
      image={commitment}
      align="right"
    />

    <Footer />
  </main>
);

export default About;