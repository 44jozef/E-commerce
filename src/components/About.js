import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/about.css';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1>About Us</h1>
        <p>Welcome to our company! We are the best resellers on planet Earth.</p>
      </div>
    </>
  );
};

export default About;
