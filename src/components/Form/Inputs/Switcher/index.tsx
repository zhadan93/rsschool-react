import React, { ChangeEvent, ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Switcher.module.scss';

const { switcher, checkbox, wrapper, content, tumbler } = styles;

export interface SwitcherProps extends InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  optionLabels?: string[];
  error?: JSX.Element;
  switcherRef?: ForwardedRef<HTMLInputElement>;
  register?: Record<string, unknown>;
}

const Switcher: React.FC<SwitcherProps> = ({
  className,
  optionLabels = [],
  children,
  switcherRef,
  onValueChange,
  error,
  register,
  ...otherAttrs
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange?.(e);
  };

  const [firstOptionLabel, secondOptionLabel] = optionLabels;

  return (
    <label className={classNames(switcher, className)}>
      <input
        className={classNames(checkbox)}
        onChange={handleChange}
        type="checkbox"
        ref={switcherRef}
        {...otherAttrs}
        {...register}
      />
      <div className={wrapper}>
        <span
          className={classNames(content, {
            selected: !firstOptionLabel,
          })}
          data-firstoptionlabel={firstOptionLabel}
          data-secondoptionlabel={secondOptionLabel}
        />
        <span className={tumbler} />
      </div>
      {children}
      {error}
    </label>
  );
};

export default Switcher;

export const SwitcherWithRef = forwardRef<HTMLInputElement, SwitcherProps>((props, ref) => (
  <Switcher {...props} switcherRef={ref} />
));
