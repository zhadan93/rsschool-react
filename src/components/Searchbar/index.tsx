import React, { KeyboardEvent, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import MagnifierIcon from 'components/Icons/MagnifierIcon';

import './Searchbar.scss';

interface SearchbarProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearchSend?: (value: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ className, onSearchSend, ...otherAttr }) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const { code, target } = e;
    if (code === 'Enter' && target instanceof HTMLInputElement) {
      onSearchSend?.(target.value);
    }
  };

  return (
    <div className="searchbar">
      <input
        data-testid="search"
        className={classNames('searchbar__input', className)}
        placeholder="Search..."
        type="search"
        onKeyDown={handleKeyDown}
        {...otherAttr}
      />
      <MagnifierIcon className="searchbar__magnifier-icon" />
    </div>
  );
};

export default Searchbar;
