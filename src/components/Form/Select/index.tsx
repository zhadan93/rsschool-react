import React, {
  Component,
  forwardRef,
  ForwardedRef,
  ChangeEvent,
  SelectHTMLAttributes,
} from 'react';
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
}

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
    const { options, children, className, error, selectRef, ...otherAttr } = this.props;
    delete otherAttr.onValueChange;

    return (
      <label className="select-wrapper label">
        {children}
        <select
          data-testid="select"
          className={classNames('select-wrapper__select', className)}
          ref={selectRef}
          onChange={this.handleChange}
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
  }
}

export default Select;

export const SelectWithRef = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => (
  <Select {...props} selectRef={ref} />
));
