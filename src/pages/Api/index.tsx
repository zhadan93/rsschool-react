import React, { Component } from 'react';

import ApiCardList from 'components/ApiCards/ApiCardList';
import Searchbar from 'components/Searchbar';
import photosService from 'services/photoService';
import { PhotoCardData, QueryStringParameters } from 'types/serviceDataTypes';
import { Errors } from 'types/types';
import Loader from 'components/Loader';
import Error from 'components/Error';

import './Api.scss';

const queryStringParameters = 'queryStringParameters';

type ApiState = {
  queryStringParameters: QueryStringParameters;
  apiCardsData: PhotoCardData[] | null;
  isLoaded: boolean;
  errors: null | Errors;
  value: string;
};

type ApiProps = Record<string, string>;

class Api extends Component<ApiProps, ApiState> {
  constructor(props: ApiProps) {
    super(props);

    this.state = {
      value: '',
      queryStringParameters: {
        query: '',
      },
      apiCardsData: null,
      isLoaded: false,
      errors: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  async searchPhotos() {
    await this.setState((prevState) => {
      const { isLoaded, apiCardsData } = prevState;
      return {
        isLoaded: !isLoaded,
        errors: null,
        apiCardsData: apiCardsData?.length ? [...apiCardsData] : null,
      };
    });

    const data = await photosService.getPhotos(this.state.queryStringParameters);

    if (Array.isArray(data)) {
      this.setState({ apiCardsData: data, errors: null });
    } else {
      this.setState({ errors: data, apiCardsData: null });
    }

    await this.setState((prevState) => ({
      isLoaded: !prevState.isLoaded,
    }));
  }

  async componentDidMount() {
    const query = localStorage.getItem(queryStringParameters);

    if (query) {
      await this.setState((currentState) => ({
        queryStringParameters: { ...currentState.queryStringParameters, query },
      }));
    }

    await this.searchPhotos();
  }

  componentWillUnmount() {
    localStorage.setItem(queryStringParameters, this.state.queryStringParameters.query);
  }

  handleChange(value: string) {
    this.setState({ value });
  }

  async handleEnter() {
    await this.setState((currentState) => ({
      queryStringParameters: { ...currentState.queryStringParameters, query: currentState.value },
    }));

    const { query } = this.state.queryStringParameters;

    if (query) {
      await this.searchPhotos();
    }
  }

  render() {
    const { apiCardsData, isLoaded, errors } = this.state;
    let apiError = <></>;

    if (errors) {
      const { title, status, content } = errors;
      apiError = (
        <Error className="api__error" title={title} status={status} content={content}></Error>
      );
    }

    return (
      <div data-testid="api" className="container">
        <div className="api__header">
          <div className="api__header-content">
            <h1 className="api__title">Pics search</h1>
            <div>{"Search any term you want. By default, the search expression is 'mountain'"}</div>
          </div>
          <Searchbar
            onSearchChange={this.handleChange}
            onSearchSend={this.handleEnter}
            className="api__searchbar"
          />
        </div>
        <div className="api__content">
          {isLoaded && <Loader />}
          {apiCardsData && apiCardsData.length !== 0 && <ApiCardList apiCardsData={apiCardsData} />}
          {apiCardsData && apiCardsData.length === 0 && (
            <div className="api__message">
              <span className="api__message-title">Sorry!</span>Nothing was found for your query.
              Try to search another term
            </div>
          )}
          {errors && apiError}
        </div>
      </div>
    );
  }
}

export default Api;
