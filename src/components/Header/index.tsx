import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { NAV_PATHS } from '../../constants';

import './Header.scss';

const Header = (): JSX.Element => {
  const setLinkClassName = (isActive: boolean) =>
    classNames('nav__link', { 'nav__link--active': isActive });

  return (
    <header className="header">
      <div className="container header__container">
        <nav>
          <ul className="nav">
            {Object.entries(NAV_PATHS).map(([key, { name, path }]) => (
              <li key={key}>
                <NavLink to={path} className={({ isActive }) => setLinkClassName(isActive)} end>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

/*<li>
              <NavLink to="/" className={({ isActive }) => setLinkClassName(isActive)} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="about" className={({ isActive }) => setLinkClassName(isActive)} end>
                About
              </NavLink>
            </li> */
