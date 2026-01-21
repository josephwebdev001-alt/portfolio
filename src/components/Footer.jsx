import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Joe Developer. All rights reserved.</p>
        <p>Built with React, Node.js, and MongoDB</p>
      </div>
    </footer>
  );
}

export default Footer;
