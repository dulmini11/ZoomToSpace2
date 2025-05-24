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
            <li className="dropdown">
              <Link to="/">Planet Select <span className="dropdown-arrow">▼</span></Link>
              <div className="dropdown-content">
                <Link to="/">Mercury</Link>
                <Link to="/">Venus</Link>
                <Link to="/">Earth</Link>
                <Link to="/">Mars</Link>
                <Link to="/">Jupiter</Link>
                <Link to="/">Saturn</Link>
                <Link to="/">Uranus</Link>
                <Link to="/">Neptune</Link>
              </div>
            </li>
            <li><Link to="/Astronauts">Astronauts</Link></li>
            <li><Link to="/space">About</Link></li>
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
          <li><Link to="/" onClick={toggleMenu}>Planet Select</Link></li>
          <li><Link to="/Astronauts" onClick={toggleMenu}>Astronauts</Link></li>
          <li><Link to="/" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/" onClick={toggleMenu}>Technology</Link></li>
          <li><Link to="/" onClick={toggleMenu}>Galaxy</Link></li>
          <li><Link to="/" onClick={toggleMenu}>Satellite</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
