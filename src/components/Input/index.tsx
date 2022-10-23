import React, { Component, forwardRef, ChangeEvent } from 'react';
import classNames from 'classnames';

import { InputProps } from 'types/types';
import './Input.scss';

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

    return (
      <div
        className={classNames('input-wrapper', {
          'input-wrapper--checkbox': type === 'checkbox',
          'input-wrapper--switcher': isSwitch,
        })}
      >
        {label && (
          <label className="label" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          id={id}
          className={classNames(
            'input-wrapper__input',
            {
              'input-wrapper__input--switcher': type === 'checkbox' && isSwitch,
              'input-wrapper__input--checkbox': type === 'checkbox' && !isSwitch,
              'input-wrapper__input--file': type === 'file',
              'input-wrapper__input--submit': type === 'submit',
              'input-wrapper__input--disabled': attr.disabled,
            },
            className
          )}
          onChange={this.handleChange}
          type={type}
          ref={inputRef}
          {...attr}
        />
        {isSwitch && (
          <label className="input-wrapper__switcher-label" htmlFor={id}>
            <span
              className={classNames(
                'input-wrapper__switcher-label-inner',
                {
                  'input-wrapper__switcher-label-inner--selected': !firstOptionLabel,
                },
                className
              )}
              data-firstoptionlabel={firstOptionLabel}
              data-secondoptionlabel={secondOptionLabel}
            />
            <span className={'input-wrapper__switcher-label-tumbler'} />
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
