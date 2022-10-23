import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import classNames from 'classnames';

import './Button.scss';

interface ButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  onButtonClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { onButtonClick, children, className, ...attr } = props;

  return (
    <button className={classNames('btn', className)} onClick={onButtonClick} {...attr}>
      {children}
    </button>
  );
};

export default Button;
