import React, { Component, forwardRef } from 'react';
import classNames from 'classnames';

import { InputProps } from 'types/types';
import './Input.scss';

class Input extends Component<InputProps> {
  constructor(props: InputProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { onValueChange } = this.props;
    const { value, checked, type } = e.target;
    const changeValue = type === 'checkbox' ? checked : value;

    onValueChange && onValueChange(changeValue);
  }

  render(): JSX.Element {
    const {
      id,
      label,
      error,
      className,
      type = 'text',
      inputRef,
      optionLabels = [],
      isSwitch,
      ...otherAttrs
    } = this.props;

    const [firstOptionLabel, secondOptionLabel] = optionLabels;

    const attr: Partial<InputProps> = { ...otherAttrs };
    delete attr.onValueChange;

    let defaultClassName = 'input-wrapper__input';
    switch (type) {
      case 'search':
        defaultClassName = 'input-wrapper__search-input';
        break;
      case 'checkbox':
        defaultClassName = isSwitch
          ? 'switcher-wrapper__switcher'
          : 'input-wrapper__checkbox-input';
        break;
      case 'file':
        defaultClassName = 'input-wrapper__file-input';
        break;
      case 'submit':
        defaultClassName = 'input-wrapper__submit-input';
        break;
    }

    return (
      <div className={classNames({ 'input-wrapper': !isSwitch, 'switcher-wrapper': isSwitch })}>
        <label className="label" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          className={classNames(defaultClassName, className, {
            'input-wrapper__submit-input--disabled': attr.disabled,
          })}
          onChange={this.handleChange}
          type={type}
          ref={inputRef}
          {...attr}
        />
        {isSwitch && (
          <label className="switcher-wrapper__inner-label" htmlFor={id}>
            <span
              className={classNames('switcher-wrapper__inner', {
                'switcher-wrapper__inner--selected': !firstOptionLabel,
              })}
              data-firstoptionlabel={firstOptionLabel}
              data-secondoptionlabel={secondOptionLabel}
            />
            <span className={'switcher-wrapper__tumbler'} />
          </label>
        )}
        {error && <span className="error">{error}</span>}
      </div>
    );
  }
}

export default Input;

export const InputWithRef = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Input {...props} inputRef={ref} />
));
