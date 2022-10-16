import React, { Component } from 'react';
import classNames from 'classnames';
import Input from 'components/Input';
import Icons from 'components/Icons';

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

  handleChange(value: string | boolean) {
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
        <Icons id="magnifier" className="searchbar__magnifier-icon" />
      </div>
    );
  }
}

export default Searchbar;
