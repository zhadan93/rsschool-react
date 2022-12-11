import React from 'react';

import './CardList.scss';

import Card from 'components/MyCards/Card';
import { CardDetails } from '../../../types/types';

interface CardListProps {
  cardsData: CardDetails[];
}

const CardList: React.FC<CardListProps> = ({ cardsData }) => {
  return (
    <div className="cards">
      <ul className="cards__list">
        {cardsData.map((cardData) => (
          <li className="cards__item" key={cardData.id}>
            <Card cardData={cardData} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
