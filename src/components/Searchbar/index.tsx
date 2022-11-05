import React, { Component, ChangeEvent, KeyboardEvent, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import MagnifierIcon from 'components/Icons/MagnifierIcon';

import './Searchbar.scss';

interface SearchbarProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearchChange?: (value: string) => void;
  onSearchSend?: () => void;
}

type SearchbarState = {
  value: string;
};
/*const Searchbar = ({ className, onSearchChange, onSearchSend, ...otherAttr }: SearchbarProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange && onSearchChange(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      onSearchSend && onSearchSend();
    }
  };

  return (
    <div className="searchbar">
      <input
        className={classNames('searchbar__input', className)}
        placeholder="Search..."
        type="search"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...otherAttr}
      />
      <MagnifierIcon className="searchbar__magnifier-icon" />
    </div>
  );
};*/
const searchbarKey = 'cardsSearchBar';

class Searchbar extends Component<SearchbarProps, SearchbarState> {
  constructor(props: SearchbarProps) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    const value = localStorage.getItem(searchbarKey);

    value && this.setState({ value });
  }

  componentWillUnmount() {
    localStorage.setItem(searchbarKey, this.state.value);
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { onSearchChange } = this.props;
    const { value } = e.target;
    onSearchChange && onSearchChange(value);
    this.setState({ value });
  }

  handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.code === 'Enter') {
      const { onSearchSend } = this.props;
      onSearchSend && onSearchSend();
    }
  }

  render() {
    const { className, onSearchChange, onSearchSend, ...otherAttr } = this.props;
    return (
      <div className="searchbar">
        <input
          data-testid="search"
          className={classNames('searchbar__input', className)}
          placeholder="Search..."
          type="search"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={this.state.value}
          {...otherAttr}
        />
        <MagnifierIcon className="searchbar__magnifier-icon" />
      </div>
    );
  }
}

export default Searchbar;
