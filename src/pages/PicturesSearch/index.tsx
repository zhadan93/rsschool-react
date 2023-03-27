import React, { useState } from 'react';

import PictureSearchCardList from 'components/PicturesSearchCards/PictureSearchCardList';
import Searchbar from 'components/Searchbar';
import useData from 'customHooks/useData';
import Loader from 'components/Loader';
import Error from 'components/Error';

import './PicturesSearch.scss';

const searchbarKey = 'cardsSearchBar';
const defaultQueryStringParameters = 'mountain';

const PicturesSearch = () => {
  const [queryStringParameters, setQueryStringParameters] = useState(
    () => localStorage.getItem(searchbarKey) ?? ''
  );

  const [data, isLoaded, errors] = useData(queryStringParameters || defaultQueryStringParameters);

  function handleEnter(value: string) {
    if (value) {
      setQueryStringParameters(value);
      localStorage.setItem(searchbarKey, value);
    }
  }

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
          defaultValue={queryStringParameters}
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
