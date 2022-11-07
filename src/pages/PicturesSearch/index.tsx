import React, { Component } from 'react';

import PictureSearchCardList from 'components/PicturesSearchCards/PictureSearchCardList';
import Searchbar from 'components/Searchbar';
import picturesSearchService from 'services/picturesSearchService';
import { PictureSearchCardListData, QueryStringParameters } from 'types/serviceDataTypes';
import { Errors } from 'types/types';
import Loader from 'components/Loader';
import Error from 'components/Error';

import './PicturesSearch.scss';

type PicturesSearchState = {
  queryStringParameters: QueryStringParameters;
  picturesSearchCardsData: PictureSearchCardListData[] | null;
  isLoaded: boolean;
  errors: null | Errors;
  value: string;
};

type PicturesSearchProps = Record<string, string>;

class PicturesSearch extends Component<PicturesSearchProps, PicturesSearchState> {
  constructor(props: PicturesSearchProps) {
    super(props);

    this.state = {
      value: '',
      queryStringParameters: {
        query: '',
      },
      picturesSearchCardsData: null,
      isLoaded: false,
      errors: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  componentDidMount() {
    const searchValue = localStorage.getItem('cardsSearchBar');

    if (searchValue) {
      this.setState({
        value: searchValue,
      });
    }

    this.searchPictures();
  }

  async searchPictures() {
    this.setState((prevState) => {
      const { isLoaded, picturesSearchCardsData } = prevState;
      return {
        isLoaded: !isLoaded,
        errors: null,
        picturesSearchCardsData: picturesSearchCardsData?.length
          ? [...picturesSearchCardsData]
          : null,
      };
    });

    const data = await picturesSearchService.getPictures(this.state.queryStringParameters);

    if (Array.isArray(data)) {
      this.setState({ picturesSearchCardsData: data, errors: null });
    } else {
      this.setState({ errors: data, picturesSearchCardsData: null });
    }

    this.setState((prevState) => ({
      isLoaded: !prevState.isLoaded,
    }));
  }

  handleChange(value: string) {
    this.setState({ value });
  }

  async handleEnter() {
    const { value } = this.state;
    if (value) {
      await this.setState((prevState) => ({
        queryStringParameters: { ...prevState.queryStringParameters, query: value },
      }));

      this.searchPictures();
    }
  }

  render() {
    const { picturesSearchCardsData, isLoaded, errors } = this.state;

    return (
      <div data-testid="picture-search" className="container">
        <div className="picture-search__header">
          <div className="picture-search__header-content">
            <h1 className="picture-search__title">Pics search</h1>
            <div>{"Search any term you want. By default, the search expression is 'mountain'"}</div>
          </div>
          <Searchbar
            onSearchChange={this.handleChange}
            onSearchSend={this.handleEnter}
            className="picture-search__searchbar"
          />
        </div>
        <div className="picture-search__content">
          {isLoaded && <Loader data-testid="loader" />}
          {picturesSearchCardsData && picturesSearchCardsData.length !== 0 && (
            <PictureSearchCardList picturesSearchCardsData={picturesSearchCardsData} />
          )}
          {picturesSearchCardsData && picturesSearchCardsData.length === 0 && (
            <div className="picture-search__message">
              <span className="picture-search__message-title">Sorry!</span>Nothing was found for
              your query. Try to search another term
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
  }
}

export default PicturesSearch;
