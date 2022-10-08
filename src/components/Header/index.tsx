import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import './Header.scss';

const Header = (): JSX.Element => {
  const setLinkClassName = (isActive: boolean) =>
    classNames('nav__link', { 'nav__link--active': isActive });

  return (
    <header className="header">
      <div className="container header__container">
        <nav>
          <ul className="nav">
            <li>
              <NavLink to="/" className={({ isActive }) => setLinkClassName(isActive)} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="about" className={({ isActive }) => setLinkClassName(isActive)} end>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
