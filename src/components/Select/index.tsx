import React, { Component, forwardRef, ForwardedRef, ChangeEvent } from 'react';
import classNames from 'classnames';

import './Select.scss';

interface Option {
  inner: string;
  value?: string;
  hidden?: boolean;
  selected?: boolean;
  disabled?: boolean;
}

type SelectProps = {
  id: string;
  options: Option[];
  label?: string;
  className?: string;
  selectRef?: ForwardedRef<HTMLSelectElement>;
  value?: string;
  defaultValue?: string;
  onValueChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
};

class Select extends Component<SelectProps> {
  constructor(props: SelectProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const { onValueChange } = this.props;
    onValueChange && onValueChange(e);
  }

  render(): JSX.Element {
    const { id, options, label, className, defaultValue, selectRef, error } = this.props;
    return (
      <div className="select-wrapper">
        {label && (
          <label className="label" htmlFor={id}>
            {label}
          </label>
        )}
        <select
          id={id}
          className={classNames('select-wrapper__select', className)}
          ref={selectRef}
          onChange={this.handleChange}
          defaultValue={defaultValue}
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
        {error && <span className="error">{error}</span>}
      </div>
    );
  }
}

export default Select;

export const SelectWithRef = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => (
  <Select {...props} selectRef={ref} />
));
