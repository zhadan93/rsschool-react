import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import './Header.scss';

const Header = (): JSX.Element => {
  const NAV_PATHS = {
    home: {
      name: 'Home',
      path: '/',
    },
    myCards: {
      name: 'Pictures Search',
      path: 'pictures-search',
    },
    about: {
      name: 'About',
      path: 'about',
    },
    form: {
      name: 'Create Card',
      path: 'create-card',
    },
  };

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
