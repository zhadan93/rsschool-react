import React, {
  Component,
  forwardRef,
  ForwardedRef,
  ChangeEvent,
  InputHTMLAttributes,
} from 'react';
import classNames from 'classnames';

import './Input.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  inputRef?: ForwardedRef<HTMLInputElement>;
  error?: JSX.Element;
}

class Input extends Component<InputProps> {
  constructor(props: InputProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { onValueChange } = this.props;
    onValueChange && onValueChange(e);
  }

  render(): JSX.Element {
    const { children, className, inputRef, error, ...otherAttrs } = this.props;
    delete otherAttrs.onValueChange;

    return (
      <label className="input-wrapper label">
        {children}
        <input
          className={classNames('input-wrapper__input', className)}
          onChange={this.handleChange}
          type="text"
          ref={inputRef}
          {...otherAttrs}
        />
        {error}
      </label>
    );
  }
}

export default Input;

export const InputWithRef = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Input {...props} inputRef={ref} />
));
