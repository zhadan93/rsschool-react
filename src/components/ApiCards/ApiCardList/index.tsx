import React, { Component } from 'react';

import ApiCard from 'components/ApiCards/ApiCard';
import { PhotoCardData } from 'types/serviceDataTypes';

import './ApiCardList.scss';

interface ApiCardListProps {
  apiCardsData: PhotoCardData[];
}

class ApiCardList extends Component<ApiCardListProps> {
  constructor(props: ApiCardListProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className="api-cards" data-testid="api-cards">
        <ul className="api-cards__list">
          {this.props.apiCardsData.map((apiCardData) => (
            <li className="api-cards__item" key={apiCardData.id}>
              <ApiCard apiCardData={apiCardData} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ApiCardList;
