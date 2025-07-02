// src/pages/About.jsx
import React from 'react';
import './About.css';
import profilePic from '../assets/Asmit.png'; // Add a professional photo of yourself to the assets folder

const About = () => {
  return (
    <section id="about" className="section">
    <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={profilePic} alt="Your Name" />
        </div>
        <div className="about-text">
          <p>
            Hello! I'm a passionate web developer with a knack for creating clean, efficient, and user-friendly websites. My journey into code started with a simple "Hello World" and has since grown into a full-fledged passion for building digital experiences.
          </p>
          <p>
            I specialize in front-end development with React, but I'm always eager to learn new technologies and expand my skill set. When I'm not coding, you can find me exploring the latest tech trends or enjoying a good cup of coffee.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;