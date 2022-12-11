import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import './Date.scss';

export interface DateProps extends InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: JSX.Element;
  register?: Record<string, unknown>;
}

const Date: React.FC<DateProps> = ({
  onValueChange,
  className,
  children,
  error,
  register,
  ...otherAttrs
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange?.(e);
  };

  return (
    <label className="date-wrapper label">
      {children}
      <input
        className={classNames('date-wrapper__date', className)}
        onChange={handleChange}
        type="date"
        {...otherAttrs}
        {...register}
      />
      {error}
    </label>
  );
};

export default Date;
