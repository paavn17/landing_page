import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left-aligned Logo */}
        <div className="navbar-logo">
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%23059669' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 6h18l-1.68 10.09a2 2 0 0 1-1.98 1.91H6.66a2 2 0 0 1-1.98-1.91L3 6Z'/%3E%3Cpath d='m16 10-4 4-4-4'/%3E%3C/svg%3E" 
            alt="Trashco" 
            className="logo-icon" 
          />
          <span className="logo-text">Trashco</span>
        </div>

        {/* Centered Menu */}
        <ul className="navbar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#company">Company</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#news">News & Media</a></li>
          <li><a href="#shop">Shop</a></li>
        </ul>


      </div>
    </nav>
  );
};

export default Navbar;
