import React, {
  Component,
  forwardRef,
  ForwardedRef,
  ChangeEvent,
  InputHTMLAttributes,
} from 'react';
import classNames from 'classnames';

import './Switcher.scss';

export interface SwitcherProps extends InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  switcherRef?: ForwardedRef<HTMLInputElement>;
  optionLabels?: string[];
  error?: JSX.Element;
}

class Switcher extends Component<SwitcherProps> {
  constructor(props: SwitcherProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { onValueChange } = this.props;
    onValueChange && onValueChange(e);
  }

  render(): JSX.Element {
    const {
      className,
      switcherRef,
      optionLabels = [],
      children,
      error,
      ...otherAttrs
    } = this.props;

    const [firstOptionLabel, secondOptionLabel] = optionLabels;
    delete otherAttrs.onValueChange;

    return (
      <label className={classNames('switcher-wrapper', 'label', className)}>
        <input
          className={classNames('switcher-wrapper__checkbox')}
          onChange={this.handleChange}
          type="checkbox"
          ref={switcherRef}
          {...otherAttrs}
        />
        <div className="switcher-wrapper__switcher">
          <span
            className={classNames('switcher-wrapper__inner', {
              'switcher-wrapper__inner--selected': !firstOptionLabel,
            })}
            data-firstoptionlabel={firstOptionLabel}
            data-secondoptionlabel={secondOptionLabel}
          />
          <span className={'switcher-wrapper__tumbler'} />
        </div>
        {children}
        {error}
      </label>
    );
  }
}

export default Switcher;

export const SwitcherWithRef = forwardRef<HTMLInputElement, SwitcherProps>((props, ref) => (
  <Switcher {...props} switcherRef={ref} />
));
