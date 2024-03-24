import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Book Circus
        </Link>
      </div>

      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-links" activeClassName="active">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="about" className="nav-links" activeClassName="active">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="contact" className="nav-links" activeClassName="active">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="login" className="nav-links" activeClassName="active">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="register" className="nav-links" activeClassName="active">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;