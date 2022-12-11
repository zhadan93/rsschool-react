import React, { forwardRef, ForwardedRef, ChangeEvent, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import './Checkbox.scss';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  checkboxRef?: ForwardedRef<HTMLInputElement>;
  error?: JSX.Element;
  register?: Record<string, unknown>;
}

const Checkbox: React.FC<CheckboxProps> = ({
  onValueChange,
  children,
  className,
  checkboxRef,
  error,
  register,
  ...otherAttrs
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange?.(e);
  };

  return (
    <label className="checkbox-wrapper label">
      <input
        className={classNames('checkbox-wrapper__checkbox', className)}
        onChange={handleChange}
        type="checkbox"
        ref={checkboxRef}
        {...otherAttrs}
        {...register}
      />
      {children}
      {error}
    </label>
  );
};

export default Checkbox;

export const CheckboxWithRef = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => (
  <Checkbox {...props} checkboxRef={ref} />
));
