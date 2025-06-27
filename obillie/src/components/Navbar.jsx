import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import ActionIcons from './ActionIcons';
import '../styles/Navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <Logo />
          </div>
          
          <div className="navbar-center">
            <SearchBar />
          </div>
          
          <div className="navbar-right">
            <ActionIcons />
          </div>
        </div>
        
        {/* Mobile Layout */}
        <div className="navbar-mobile">
          <div className="mobile-top">
            <Logo />
            <ActionIcons />
          </div>
          <div className="mobile-bottom">
            <SearchBar />
          </div>
        </div>
      </nav>
    );
  };

export default Navbar;