import React from 'react';
import './css/Header.css';
import Headroom from 'react-headroom';

const Header = () => {
  return (
    <Headroom>
      <div className='header fade-in'>
        <img className='app-logo' src='./app-logo.svg' alt='' />
        <h3 className='header-title'>Infinite Gallery</h3>
      </div>
    </Headroom>
  );
};

export default Header;
