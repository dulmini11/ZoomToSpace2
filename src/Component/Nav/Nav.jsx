import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* 👇 Logo section */}
        <div className="navbar-logo">
          <Link to="/">ZoomToSpace</Link>
        </div>

        <div className="navbar-links-desktop">
          <ul>
            <li><Link to="/AboutSpace">Space</Link></li>
            <li><Link to="/SolarSystem">Solar System</Link></li>
            <li><Link to="/Planet">Planet Select</Link></li>
            <li><Link to="/Astronauts">Astronauts</Link></li>
          </ul>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
        </div>
      </div>
      
      <div className={`navbar-mobile ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/AboutSpace" onClick={toggleMenu}>Space</Link></li>
          <li><Link to="/SolarSystem" onClick={toggleMenu}>Solar System</Link></li>
          <li><Link to="/Planet" onClick={toggleMenu}>Planet Select</Link></li>
          <li><Link to="/Astronauts" onClick={toggleMenu}>Astronauts</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
