import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import './Checkbox.scss';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: JSX.Element;
  register?: Record<string, unknown>;
}

const Checkbox: React.FC<CheckboxProps> = ({
  onValueChange,
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
    <label className="checkbox-wrapper label">
      <input
        className={classNames('checkbox-wrapper__checkbox', className)}
        onChange={handleChange}
        type="checkbox"
        {...otherAttrs}
        {...register}
      />
      {children}
      {error}
    </label>
  );
};

export default Checkbox;
