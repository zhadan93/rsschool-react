import React, { useEffect, useState } from 'react';

import PictureSearchCardList from 'components/PicturesSearchCards/PictureSearchCardList';
import Searchbar from 'components/Searchbar';
import picturesSearchService from 'services/picturesSearchService';
import { PictureSearchCardListData } from 'types/serviceDataTypes';
import { Errors } from 'types/types';
import Loader from 'components/Loader';
import Error from 'components/Error';

import './PicturesSearch.scss';

const PicturesSearch = () => {
  const [data, setData] = useState<PictureSearchCardListData[] | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errors, setErrors] = useState<null | Errors>(null);
  const [queryStringParameters, setQueryStringParameters] = useState('mountain');

  const handleEnter = async (value: string) => {
    if (value && value !== queryStringParameters) {
      setQueryStringParameters(value);
      setErrors(null);
      setIsLoaded((prevState) => !prevState);
      !data?.length && setData(null);
    }
  };

  useEffect(() => {
    const searchPictures = async () => {
      const searchData = await picturesSearchService.getPictures({ query: queryStringParameters });

      const isArray = Array.isArray(searchData);
      const searchPictureData = isArray ? searchData : null;
      const searchErrors = isArray ? null : searchData;

      setData(searchPictureData);
      setErrors(searchErrors);
      setIsLoaded((prevState) => !prevState);
    };

    queryStringParameters && searchPictures();
  }, [queryStringParameters]);

  return (
    <div data-testid="picture-search" className="container">
      <div className="picture-search__header">
        <div className="picture-search__header-content">
          <h1 className="picture-search__title">Pics search</h1>
          <div>{"Search any term you want. By default, the search expression is 'mountain'"}</div>
        </div>
        <Searchbar onSearchSend={handleEnter} className="picture-search__searchbar" />
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
