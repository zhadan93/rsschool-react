import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'components/Button';
import './NotFound.scss';

const NotFound = (): JSX.Element => {
  return (
    <div className="not-found">
      <div className="container not-found__container">
        <h2 className="not-found__error-code">404</h2>
        <h3 className="not-found__header">Oops!</h3>
        <p className="not-found__text">Sorry, this page was not found</p>
        <Link to="/">
          <Button className="not-found__btn">Home Page</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
