import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

import PictureSearchCardList from 'components/PicturesSearchCards/PictureSearchCardList';
import Searchbar from 'components/Searchbar';
import useData from 'customHooks/useData';
import Loader from 'components/Loader';
import Error from 'components/Error';

import './PicturesSearch.scss';

const searchbarKey = 'cardsSearchBar';
const defaultQueryStringParameters = 'mountain';

const PicturesSearch = () => {
  const localStorageSearchbarValue = useMemo(() => localStorage.getItem(searchbarKey), []);

  const [queryStringParameters, setQueryStringParameters] = useState(
    localStorageSearchbarValue || defaultQueryStringParameters
  );

  const [data, isLoaded, errors] = useData(queryStringParameters);

  const defaultSearchValue = localStorageSearchbarValue ?? '';
  const searchValue = useRef(defaultSearchValue);

  const handleEnter = useCallback((value: string) => {
    if (value) {
      setQueryStringParameters(value);
      searchValue.current = value;
    }
  }, []);

  useEffect(() => {
    return () => {
      localStorage.setItem(searchbarKey, searchValue.current);
    };
  }, [searchValue]);

  return (
    <div data-testid="picture-search" className="container">
      <div className="picture-search__header">
        <div className="picture-search__header-content">
          <h1 className="picture-search__title">Pics search</h1>
          <div>{"Search any term you want. By default, the search expression is 'mountain'"}</div>
        </div>
        <Searchbar
          onSearchSend={handleEnter}
          className="picture-search__searchbar"
          defaultValue={defaultSearchValue}
        />
      </div>
      <div className="picture-search__content">
        {isLoaded && <Loader data-testid="loader" />}
        {data && data.length !== 0 && <PictureSearchCardList picturesSearchCardsData={data} />}
        {data && data.length === 0 && (
          <div className="picture-search__message">
            <span className="picture-search__message-title">Sorry!</span>Nothing was found for your
            query. Try to search another term
          </div>
        )}
        {errors && (
          <Error
            className="picture-search__error"
            title={errors.title}
            status={errors.status}
            content={errors.content}
          ></Error>
        )}
      </div>
    </div>
  );
};

export default PicturesSearch;
