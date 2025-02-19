import React from 'react';
import './About.css';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.jpeg';
import tech from '../assets/tech.jpg';
import commitment from '../assets/commitment.jpg';
import Footer from '../components/Footer';

const About = () => (
  <main>
    <section className="about-us-section">
      <div className="text">
        <h2>About Us</h2>
        <p>
          Welcome to our company! We are dedicated to providing the best service
          to our customers. Our team is composed of experienced professionals
          who are passionate about their work and committed to excellence.
        </p>
        <p>
          Our mission is to deliver high-quality products and services that meet
          the needs of our clients. We believe in innovation, integrity, and
          customer satisfaction. Thank you for choosing us!
        </p>
      </div>
      <img src={image1} alt="Our Team" />
    </section>

    <section className="our-values-section">
      <img src={image2} alt="Our values" />
      <div className="text">
        <h2>Our Values</h2>
        <p>
          At Burrow Space, we believe in innovation, transparency, and
          customer-centricity. These values guide every decision we make and
          every product we create. We are committed to building trust and
          delivering excellence in everything we do.
        </p>
        <p>
          Our team continuously strives to push boundaries, embracing change as
          an opportunity to grow and provide cutting-edge solutions to our
          clients.
        </p>
      </div>
    </section>

    <section className="our-technology-section">
      <div className="text">
        <h2>Our Technology</h2>
        <p>
          We leverage the latest advancements in cloud computing, AI, and data
          analytics to create systems that are not only robust but also
          intuitive. From real-time communication platforms to scalable
          infrastructure solutions, Burrow Space is at the forefront of
          technological innovation.
        </p>
        <p>
          Our platform ensures secure, efficient, and reliable operations,
          enabling businesses to focus on what they do best—achieving their
          objectives.
        </p>
      </div>
      <img src={tech} alt="Our technology" />
    </section>

    <section className="our-commitment-section">
      <img src={commitment} alt="Our commitment" />
      <div className="text">
        <h2>Our Commitment</h2>
        <p>
          Burrow Space is dedicated to creating lasting partnerships with our
          clients. We take the time to understand their unique needs and
          challenges, offering tailored solutions that deliver measurable
          results.
        </p>
        <p>
          Our commitment to sustainability and ethical practices ensures that we
          not only help businesses thrive but also contribute positively to the
          global community.
        </p>
      </div>
    </section>
    <Footer />
  </main>
);

export default About;