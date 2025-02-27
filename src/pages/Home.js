import React, { useRef, useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import './Home.css';
import middleware1 from '../assets/middleware1.jpeg';
import ajit from '../assets/ajit.jpeg';
import inva from '../assets/inva.png';
import home1 from '../assets/home1.png';
import home2 from '../assets/home2.png';
import home3 from '../assets/home3.png';

const Home = () => {
  const imageContainerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleDotClick = (index) => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollTo({
        left: index * imageContainerRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = imageContainerRef.current;
    
    const handleScroll = () => {
      const scrollPosition = container.scrollLeft;
      const imageWidth = container.clientWidth;
      setCurrentImageIndex(Math.round(scrollPosition / imageWidth));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <Hero />

      <section className="image-section">
        <div className="image-grid" ref={imageContainerRef}>
          <img src={home1} alt="Product Showcase 1" className="scroll-image" />
          <img src={home2} alt="Product Showcase 2" className="scroll-image" />
          <img src={home3} alt="Product Showcase 3" className="scroll-image" />
        </div>
        <div className="dots-container">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              className={`dot ${currentImageIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="middleware-section">
      <h2 className="animated-text">Upcoming!</h2>
        <h3 className="animated-text">Middleware Solution</h3>
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
        <img src={middleware1} alt="Middleware Solution" className="full-screen-image" />
      </section>

      <section className="trusted-section">
      <h2 className="animated-text">Trusted and Mentored By</h2>
          <div className="company">
            <img src={ajit} alt="Ajit Gokhale" className="profile-image" />
              <div className="profile-info">
                <   p className="name">Ajit Gokhale</p>
                <p className="position">Sr Vice President at Invasystems Inc.</p>
                  <div className="logo-button-container">
                    <img src={inva} alt="Invasystems" className="company-logo" />
                    <a href="https://www.linkedin.com/in/ajitgokhale" target="_blank" rel="noopener noreferrer" className="linkedin-button">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Home;