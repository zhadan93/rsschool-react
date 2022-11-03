import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import classNames from 'classnames';

import './CloseButton.scss';

interface CloseButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  onButtonClick?: () => void;
}

const CloseButton = (props: CloseButtonProps) => {
  const { onButtonClick, children, className, ...attr } = props;

  return (
    <button className={classNames('close-btn', className)} onClick={onButtonClick} {...attr}>
      {children}
    </button>
  );
};

export default CloseButton;
