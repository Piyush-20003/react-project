import React from 'react';
import './Navbar.js';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>React App</h1>
      <div>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
