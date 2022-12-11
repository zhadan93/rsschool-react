import React, {
  ChangeEvent,
  KeyboardEvent,
  InputHTMLAttributes,
  useState,
  useEffect,
  useRef,
} from 'react';
import classNames from 'classnames';

import MagnifierIcon from 'components/Icons/MagnifierIcon';

import './Searchbar.scss';

interface SearchbarProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearchSend?: (value: string) => void;
}

const searchbarKey = 'cardsSearchBar';

const Searchbar: React.FC<SearchbarProps> = ({ className, onSearchSend, ...otherAttr }) => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem(searchbarKey) || '');
  const searchbarRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const { code, target } = e;
    if (code === 'Enter' && target instanceof HTMLInputElement) {
      onSearchSend?.(target.value);
    }
  };

  useEffect(() => {
    const { current } = searchbarRef;
    return () => {
      current && localStorage.setItem(searchbarKey, current.value);
    };
  }, []);

  return (
    <div className="searchbar">
      <input
        data-testid="search"
        className={classNames('searchbar__input', className)}
        placeholder="Search..."
        type="search"
        ref={searchbarRef}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={searchValue}
        {...otherAttr}
      />
      <MagnifierIcon className="searchbar__magnifier-icon" />
    </div>
  );
};

export default Searchbar;
