import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const { navMenu, navList, navItem, nav_link } = css;

function Header() {
  return (
    <>
      <nav className={navMenu}>
        <ul className={navList}>
          <li className={navItem}>
            <NavLink to="/" className={nav_link}>
              Home
            </NavLink>
          </li>
          <li className={navItem}>
            <NavLink to="/movies" className={nav_link}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
