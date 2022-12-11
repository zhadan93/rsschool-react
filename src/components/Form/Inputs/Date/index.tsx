import React, { forwardRef, ForwardedRef, ChangeEvent, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import './Date.scss';

export interface DateProps extends InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  dateRef?: ForwardedRef<HTMLInputElement>;
  error?: JSX.Element;
  register?: Record<string, unknown>;
}

const Date: React.FC<DateProps> = ({
  onValueChange,
  className,
  children,
  dateRef,
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
        ref={dateRef}
        {...otherAttrs}
        {...register}
      />
      {error}
    </label>
  );
};

export default Date;

export const DateWithRef = forwardRef<HTMLInputElement, DateProps>((props, ref) => (
  <Date {...props} dateRef={ref} />
));
