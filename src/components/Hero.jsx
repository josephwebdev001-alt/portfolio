import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Joseph Abraham.o.</h1>
          <p className="hero-subtitle">Full Stack Web Developer / Data Analyst Engineer</p>
          <p className="hero-description">
            I build responsive, modern web applications using React, Node.js, and MongoDB
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">View My Work</button>
            <button className="btn btn-secondary">Get In Touch</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop" alt="Developer" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
