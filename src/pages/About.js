import React from 'react';
import AboutSection from '../components/AboutSection';
import InfoSection from '../components/InfoSection';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.jpeg';
import tech from '../assets/tech.jpg';
import commitment from '../assets/commitment.jpg';

const About = () => (
  <main>
        <section className="hero-section">
            <div className="text">
                <h1>About Us</h1>
                <p>Burrow Space is a forward-thinking platform dedicated to empowering businesses with innovative solutions that drive growth, efficiency, and success. Our mission is to simplify complex challenges by delivering scalable and reliable tools tailored to the modern enterprise.</p>
                <p>We pride ourselves on fostering collaboration, creativity, and adaptability, ensuring that every client can achieve their goals in today's fast-paced digital world.</p>
            </div>
            <img src={image1} alt="Team introduction" />
        </section>

        <section className="info-section">
            <div className="text">
                <h2>Our Values</h2>
                <p>At Burrow Space, we believe in innovation, transparency, and customer-centricity. These values guide every decision we make and every product we create. We are committed to building trust and delivering excellence in everything we do.</p>
                <p>Our team continuously strives to push boundaries, embracing change as an opportunity to grow and provide cutting-edge solutions to our clients.</p>
            </div>
            <img src={image2} alt="Our values" />
        </section>

        <section className="info-section">
            <div className="text">
                <h2>Our Technology</h2>
                <p>We leverage the latest advancements in cloud computing, AI, and data analytics to create systems that are not only robust but also intuitive. From real-time communication platforms to scalable infrastructure solutions, Burrow Space is at the forefront of technological innovation.</p>
                <p>Our platform ensures secure, efficient, and reliable operations, enabling businesses to focus on what they do best—achieving their objectives.</p>
            </div>
            <img src={tech} alt="Our technology" />
        </section>

        <section className="info-section">
            <div className="text">
                <h2>Our Commitment</h2>
                <p>Burrow Space is dedicated to creating lasting partnerships with our clients. We take the time to understand their unique needs and challenges, offering tailored solutions that deliver measurable results.</p>
                <p>Our commitment to sustainability and ethical practices ensures that we not only help businesses thrive but also contribute positively to the global community.</p>
            </div>
            <img src={commitment} alt="Our commitment" />
        </section>
    </main>
);

export default About;