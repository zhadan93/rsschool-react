import React, { Component, ChangeEvent } from 'react';
import classNames from 'classnames';
import Input from 'components/Input';
import MagnifierIcon from 'components/Icons/MagnifierIcon';

import './Searchbar.scss';

type SearchbarState = { value: string };
type SearchbarProps = {
  className?: string;
};

const localStorageSearchbarKey = 'cardsSearchBar';

class Searchbar extends Component<SearchbarProps, SearchbarState> {
  constructor(props: SearchbarProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: '' };
  }

  componentDidMount() {
    const value = localStorage.getItem(localStorageSearchbarKey);
    if (value) {
      this.setState({ value });
    }
  }

  componentWillUnmount() {
    localStorage.setItem(localStorageSearchbarKey, this.state.value);
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    typeof value === 'string' && this.setState({ value });
  }

  render(): JSX.Element {
    return (
      <div className="searchbar">
        <Input
          className={classNames('searchbar__input', this.props.className)}
          placeholder="Search..."
          type="search"
          value={this.state.value}
          onValueChange={this.handleChange}
        />
        <MagnifierIcon className="searchbar__magnifier-icon" />
      </div>
    );
  }
}

export default Searchbar;
