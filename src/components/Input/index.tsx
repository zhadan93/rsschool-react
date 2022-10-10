import React, { Component } from 'react';
import classNames from 'classnames';
import './Input.scss';
import { InputProps } from 'types/types';

class Input extends Component<InputProps> {
  constructor(props: InputProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.onValueChange(e.target.value);
  }

  render(): JSX.Element {
    const { className, placeholder, type = 'text', searchValue } = this.props;

    return (
      <div className="input-wrapper">
        <input
          className={classNames('input', className)}
          type={type}
          placeholder={placeholder}
          onChange={this.handleChange}
          value={searchValue}
        />
      </div>
    );
  }
}

export default Input;
