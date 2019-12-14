import React from 'react';
import './css/Header.css';

const Header = () => {
  return (
    <header className='header'>
      <img className='app-logo fade-in ' src='./app-logo.svg' alt='' />
      <h3 className='header-title fade-in '>Infinite Gallery</h3>
    </header>
  );
};

export default Header;
