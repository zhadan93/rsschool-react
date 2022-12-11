import React, { useState } from 'react';
import classNames from 'classnames';

import FavoriteIcon from 'components/Icons/FavoriteIcon';

import './Card.scss';

import { CardDetails } from '../../../types/types';

const MEASURE_UNITS: Record<string, string> = {
  cost: '₽',
  volume: 'ml',
};

type CardProps = {
  cardData: CardDetails;
};

const Card: React.FC<CardProps> = ({ cardData }) => {
  const { favorite, id, name, description, ...rest } = cardData;
  const [isFavorite, setIsFavorite] = useState(favorite);

  const handleFavoriteClick = () => {
    setIsFavorite((prevState) => !prevState);
  };

  return (
    <div className="card">
      <img src={require(`../../../assets/img/${id}.jpg`)} alt={name} className="card__img" />
      <div className="card__main-content">
        <div className="card__name">{name}</div>
        <div className="card__description">{description}</div>
      </div>
      <div className="card__characteristics">
        <h3 className="card__characteristic-title">Characteristics</h3>
        {Object.entries(rest).map(([characteristic, value]) => {
          return (
            <div key={characteristic} className="card__characteristic">
              <span className="card__characteristic-key">{characteristic}</span>
              <span className="card__characteristic-value">
                {value}
                {MEASURE_UNITS[characteristic]}
              </span>
            </div>
          );
        })}
      </div>
      <button className="card__favorite" onClick={handleFavoriteClick}>
        <FavoriteIcon
          className={classNames('card__favorite-icon', { 'favorite-icon--active': isFavorite })}
        />
      </button>
    </div>
  );
};

export default Card;
