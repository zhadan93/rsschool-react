import React, {
  Component,
  forwardRef,
  ForwardedRef,
  ChangeEvent,
  InputHTMLAttributes,
} from 'react';
import classNames from 'classnames';

import './Checkbox.scss';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  checkboxRef?: ForwardedRef<HTMLInputElement>;
  error?: JSX.Element;
}

class Checkbox extends Component<CheckboxProps> {
  constructor(props: CheckboxProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { onValueChange } = this.props;
    onValueChange && onValueChange(e);
  }

  render(): JSX.Element {
    const { children, className, checkboxRef, error, ...otherAttrs } = this.props;
    delete otherAttrs.onValueChange;

    return (
      <label className="checkbox-wrapper label">
        <input
          className={classNames('checkbox-wrapper__checkbox', className)}
          onChange={this.handleChange}
          type="checkbox"
          ref={checkboxRef}
          {...otherAttrs}
        />
        {children}
        {error}
      </label>
    );
  }
}

export default Checkbox;

export const CheckboxWithRef = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => (
  <Checkbox {...props} checkboxRef={ref} />
));
