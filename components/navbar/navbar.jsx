import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto gap-4">
            <a className="nav-link"  href="#">Home</a>
            <a className="nav-link" href="#">Company</a>
            <a className="nav-link" href="#">Services</a>
            <a className="nav-link" href="#">News & Media</a>
            <a className="nav-link" href="#">Shop</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
