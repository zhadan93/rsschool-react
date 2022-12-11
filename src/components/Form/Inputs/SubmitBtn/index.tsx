import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import './SubmitBtn.scss';

export interface SubmitBtnProps extends InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({ className, disabled, ...otherAttrs }) => {
  return (
    <input
      className={classNames(
        'submit',
        {
          'submit--disabled': disabled,
        },
        className
      )}
      type="submit"
      disabled={disabled}
      {...otherAttrs}
    />
  );
};

export default SubmitBtn;
