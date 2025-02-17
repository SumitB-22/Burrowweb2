import React from 'react';
import './InfoSection.css';

const InfoSection = ({ title, text1, text2, imgSrc, altText }) => (
  <section className="info-section">
    <div className="text">
      <h2>{title}</h2>
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
    <img src={imgSrc} alt={altText} />
  </section>
);

export default InfoSection;