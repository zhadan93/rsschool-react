import React from 'react';
import classNames from 'classnames';
import { Errors } from 'types/types';

import './Error.scss';

const Error = (props: Errors) => {
  const { children, className, title, content, status } = props;

  return (
    <div className={classNames('error', className)}>
      {status && <h2 className="error__status-code">{status}</h2>}
      {title && <h3 className="error__header">{title}</h3>}
      {content && (
        <p className="error__content">
          {content.map((item, index) => (
            <span key={index * Math.random()}>{item}</span>
          ))}
        </p>
      )}
      {children}
    </div>
  );
};

export default Error;
