import React, {
  Component,
  forwardRef,
  ForwardedRef,
  ChangeEvent,
  InputHTMLAttributes,
} from 'react';
import classNames from 'classnames';

import './Date.scss';

export interface DateProps extends InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  dateRef?: ForwardedRef<HTMLInputElement>;
  error?: JSX.Element;
}

class Date extends Component<DateProps> {
  constructor(props: DateProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { onValueChange } = this.props;
    onValueChange && onValueChange(e);
  }

  render(): JSX.Element {
    const { className, children, dateRef, error, ...otherAttrs } = this.props;
    delete otherAttrs.onValueChange;

    return (
      <label className="date-wrapper label">
        {children}
        <input
          className={classNames('date-wrapper__date', className)}
          onChange={this.handleChange}
          type="date"
          ref={dateRef}
          {...otherAttrs}
        />
        {error}
      </label>
    );
  }
}

export default Date;

export const DateWithRef = forwardRef<HTMLInputElement, DateProps>((props, ref) => (
  <Date {...props} dateRef={ref} />
));
