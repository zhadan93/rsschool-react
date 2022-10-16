import React, { Component, forwardRef, ForwardedRef } from 'react';
import classNames from 'classnames';

type SelectProps = {
  id: string;
  options: string[];
  error?: string;
  label?: string;
  className?: string;
  selectRef?: ForwardedRef<HTMLSelectElement>;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

class Select extends Component<SelectProps> {
  constructor(props: SelectProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const { onValueChange } = this.props;
    onValueChange && onValueChange(e.target.value);
  }

  render(): JSX.Element {
    const { id, options, error, label, className, defaultValue, selectRef } = this.props;
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
        >
          {defaultValue && <option>{defaultValue}</option>}
          {options.map((option) => (
            <option key={option} className="select-wrapper__option">
              {option}
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
