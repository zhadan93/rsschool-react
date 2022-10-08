import React, { Component } from 'react';
import classNames from 'classnames';
import Input from 'components/Input';
import Icons from 'components/Icons';

import './Searchbar.scss';

type SearchbarState = { value: string };
type SearchbarProps = {
  className?: string;
};

class Searchbar extends Component<SearchbarProps, SearchbarState> {
  constructor(props: SearchbarProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: '' };
  }

  componentDidMount() {
    const value = localStorage.getItem('cardsSearchBar');
    if (value) {
      this.setState({ value });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('cardsSearchBar', this.state.value);
  }

  handleChange(value: string) {
    this.setState({ value });
  }

  render(): JSX.Element {
    return (
      <div className="searchbar">
        <Input
          className={classNames('searchbar__input', this.props.className)}
          placeholder="Search..."
          type="search"
          searchValue={this.state.value}
          onValueChange={this.handleChange}
        />
        <Icons id="magnifier" className="searchbar__magnifier-icon" />
      </div>
    );
  }
}

export default Searchbar;
