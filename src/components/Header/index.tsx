import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  const linkClassName = 'nav__link';
  const activeLinkClassName = 'nav__link--active';

  return (
    <header className="header">
      <div className="container header__container">
        <nav>
          <ul className="nav">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `${linkClassName} ${isActive && activeLinkClassName}`}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) => `${linkClassName} ${isActive && activeLinkClassName}`}
                end
              >
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
