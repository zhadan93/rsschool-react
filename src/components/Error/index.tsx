import React from 'react';
import classNames from 'classnames';

import './Error.scss';

type ErrorProps = {
  className?: string;
  children: React.ReactNode;
};

const Error = (props: ErrorProps) => {
  const { children, className } = props;

  return <div className={classNames('error', className)}>{children}</div>;
};

export default Error;
