// src/pages/Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="section" style={{height: '100vh'}}>
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm [Your Name]</h1>
        <p className="hero-subtitle">A Creative Web Developer</p>
        <a href="#projects" className="hero-button">View My Work</a>
      </div>
    </section>
  );
};

export default Home;