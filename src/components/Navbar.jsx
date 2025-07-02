import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="#home">YourName</a>
        </div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="navbar-toggle" onClick={toggleSidebar}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={toggleSidebar}>Home</a>
        <a href="#about" onClick={toggleSidebar}>About</a>
        <a href="#skills" onClick={toggleSidebar}>Skills</a>
        <a href="#projects" onClick={toggleSidebar}>Projects</a>
        <a href="#contact" onClick={toggleSidebar}>Contact</a>
      </div>
    </>
  );
};

export default Navbar;