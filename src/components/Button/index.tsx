import React from 'react';
import classNames from 'classnames';

import './Button.scss';

type ButtonProps = {
  className?: string;
  onButtonClick?: () => void;
  children: string | JSX.Element;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const Button = (props: ButtonProps) => {
  const { onButtonClick, children, className, type = 'button', ...attr } = props;

  return (
    <button className={classNames('btn', className)} onClick={onButtonClick} type={type} {...attr}>
      {children}
    </button>
  );
};

export default Button;
