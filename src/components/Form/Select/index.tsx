import React, { forwardRef, ForwardedRef, ChangeEvent, SelectHTMLAttributes } from 'react';
import classNames from 'classnames';

import './Select.scss';

interface Option {
  inner: string;
  value?: string;
  hidden?: boolean;
  selected?: boolean;
  disabled?: boolean;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  selectRef?: ForwardedRef<HTMLSelectElement>;
  onValueChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  error: JSX.Element;
  register?: Record<string, unknown>;
}

const Select: React.FC<SelectProps> = ({
  onValueChange,
  options,
  children,
  className,
  error,
  selectRef,
  register,
  ...otherAttr
}) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onValueChange?.(e);
  };

  return (
    <label className="select-wrapper label">
      {children}
      <select
        data-testid="select"
        className={classNames('select-wrapper__select', className)}
        ref={selectRef}
        onChange={handleChange}
        {...register}
        {...otherAttr}
      >
        {options.map(({ inner, value, ...otherAttrs }) => (
          <option
            key={inner || value}
            className="select-wrapper__option"
            value={inner || value}
            {...otherAttrs}
          >
            {inner}
          </option>
        ))}
      </select>
      {error}
    </label>
  );
};

export default Select;

export const SelectWithRef = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => (
  <Select {...props} selectRef={ref} />
));
