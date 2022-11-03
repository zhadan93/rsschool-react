import React, { Component } from 'react';

import './CardList.scss';

import Card from 'components/MyCards/Card';
import { CardDetails } from '../../../types/types';

interface CardListProps {
  cardsData: CardDetails[];
}

class CardList extends Component<CardListProps> {
  constructor(props: CardListProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className="cards">
        <ul className="cards__list">
          {this.props.cardsData.map((cardData) => (
            <li className="cards__item" key={cardData.id}>
              <Card cardData={cardData} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CardList;
