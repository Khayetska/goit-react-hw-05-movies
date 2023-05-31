import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

const { navMenu, navList, navItem } = css;

function Header() {
  return (
    <>
      <nav className={navMenu}>
        <ul className={navList}>
          <li className={navItem}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={navItem}>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
