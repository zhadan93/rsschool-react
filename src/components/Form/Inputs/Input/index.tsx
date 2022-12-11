import React, { forwardRef, ForwardedRef, ChangeEvent, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import './Input.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  inputRef?: ForwardedRef<HTMLInputElement>;
  error?: JSX.Element;
  register?: Record<string, unknown>;
}

const Input: React.FC<InputProps> = ({
  onValueChange,
  inputRef,
  children,
  className,
  error,
  register,
  ...otherAttrs
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange?.(e);
  };

  return (
    <label className="input-wrapper label">
      {children}
      <input
        className={classNames('input-wrapper__input', className)}
        onChange={handleChange}
        type="text"
        ref={inputRef}
        {...otherAttrs}
        {...register}
      />
      {error}
    </label>
  );
};

export default Input;

export const InputWithRef = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Input {...props} inputRef={ref} />
));
