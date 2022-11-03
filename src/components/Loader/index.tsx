import React from 'react';
import classNames from 'classnames';

import './Loader.scss';

type LoaderProps = {
  className?: string;
};

const Loader = (props: LoaderProps) => {
  const { className } = props;

  return <div className={classNames('loader', className)} />;
};

export default Loader;
