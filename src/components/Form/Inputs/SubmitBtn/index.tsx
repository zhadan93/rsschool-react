import React, { forwardRef, ForwardedRef, ChangeEvent, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import './SubmitBtn.scss';

export interface SubmitBtnProps extends InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  submitRef?: ForwardedRef<HTMLInputElement>;
}

const SubmitBtn = (props: SubmitBtnProps) => {
  const { className, submitRef, ...otherAttrs } = props;
  const { disabled } = otherAttrs;

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
      ref={submitRef}
      {...otherAttrs}
    />
  );
};

export default SubmitBtn;

export const SubmitBtnWithRef = forwardRef<HTMLInputElement, SubmitBtnProps>((props, ref) => (
  <SubmitBtn {...props} submitRef={ref} />
));
