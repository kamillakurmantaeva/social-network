import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://images.vexels.com/media/users/3/137577/isolated/preview/75b3c8a4aba24222274e4ea2f2aa52ab-cube-geometric-abstract-logo-by-vexels.png"
        // className="App-logo"
        alt="logo"
      />
    </header>
  );
};

export default Header;
