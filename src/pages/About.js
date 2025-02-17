import React from 'react';
import AboutSection from '../components/AboutSection';
import InfoSection from '../components/InfoSection';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.jpeg';
import tech from '../assets/tech.jpg';
import commitment from '../assets/commitment.jpg';

const About = () => (
  <main>
    <AboutSection imgSrc={image1} />
    <InfoSection 
      title="Our Values" 
      text1="At Burrow Space, we believe in innovation, transparency, and customer-centricity. These values guide every decision we make and every product we create. We are committed to building trust and delivering excellence in everything we do."
      text2="Our team continuously strives to push boundaries, embracing change as an opportunity to grow and provide cutting-edge solutions to our clients."
      imgSrc={image2}
      altText="Our values"
    />
    <InfoSection 
      title="Our Technology" 
      text1="We leverage the latest advancements in cloud computing, AI, and data analytics to create systems that are not only robust but also intuitive. From real-time communication platforms to scalable infrastructure solutions, Burrow Space is at the forefront of technological innovation."
      text2="Our platform ensures secure, efficient, and reliable operations, enabling businesses to focus on what they do best—achieving their objectives."
      imgSrc={tech}
      altText="Our technology"
    />
    <InfoSection 
      title="Our Commitment" 
      text1="Burrow Space is dedicated to creating lasting partnerships with our clients. We take the time to understand their unique needs and challenges, offering tailored solutions that deliver measurable results."
      text2="Our commitment to sustainability and ethical practices ensures that we not only help businesses thrive but also contribute positively to the global community."
      imgSrc={commitment}
      altText="Our commitment"
    />
  </main>
);

export default About;