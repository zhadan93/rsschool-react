import React from 'react';

import './NotFound.scss';

const NotFound = (): JSX.Element => {
  const handleClick = () => (window.location.href = '/');
  return (
    <div className="not-found">
      <div className="container not-found__container">
        <h2 className="not-found__error-code">404</h2>
        <h3 className="not-found__header">Oops!</h3>
        <p className="not-found__text">Sorry, this page was not found</p>
        <button className="not-found__btn" onClick={handleClick}>
          Home Page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
