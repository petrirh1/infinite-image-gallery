import React from 'react';
import Headroom from 'react-headroom';
import { useMediaPredicate } from 'react-media-hook';
import Logo from './Logo';
import './css/Header.css';

const Header = () => {
  const preferredTheme = useMediaPredicate('(prefers-color-scheme: dark)')
    ? 'dark'
    : 'light';

  return (
    <Headroom disableInlineStyles={true} downTolerance={5} upTolerance={5}>
      <header>
        <Logo
          className='app-logo'
          width={20}
          height={20}
          fill={preferredTheme === 'dark' ? '#FFF' : '#212121'}
        />
        <h3 className='header-title'>Infinite Gallery</h3>
      </header>
    </Headroom>
  );
};

export default Header;
