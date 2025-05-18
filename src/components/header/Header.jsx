import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img src="/images/logo_kasa.svg" alt="Kasa" className="header-logo" />
      </NavLink>

      <nav className="header-nav">

        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Accueil
        </NavLink>
        <NavLink 
          to="/a-propos"  
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          A Propos
        </NavLink>
        
      </nav>
    </header>
  );
};

export default Header;