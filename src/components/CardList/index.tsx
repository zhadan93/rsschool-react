import React, { Component } from 'react';

import './CardList.scss';

import Card from 'components/Card';
import { CardDataDetails } from '../../types/types';

interface CardListProps {
  data: CardDataDetails[];
}

class CardList extends Component<CardListProps> {
  constructor(props: CardListProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className="cards">
        {this.props.data.map((cardData) => (
          <Card key={cardData.id} cardData={cardData} />
        ))}
      </div>
    );
  }
}

export default CardList;
