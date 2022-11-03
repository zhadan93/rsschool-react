import React, { Component } from 'react';
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

type CardState = Pick<CardDetails, 'favorite'>;

class Card extends Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
    this.state = {
      favorite: this.props.cardData.favorite,
    };
  }

  handleFavoriteClick(): void {
    this.setState((state) => ({
      favorite: !state.favorite,
    }));
  }

  render(): JSX.Element {
    const { id, name, description, ...rest } = this.props.cardData;
    const mapAttributes = new Map(Object.entries(rest));
    mapAttributes.delete('favorite');

    const { favorite } = this.state;

    return (
      <div className="card">
        <img src={require(`../../../assets/img/${id}.jpg`)} alt={name} className="card__img" />
        <div className="card__main-content">
          <div className="card__name">{name}</div>
          <div className="card__description">{description}</div>
        </div>
        <div className="card__characteristics">
          <h3 className="card__characteristic-title">Characteristics</h3>
          {Array.from(mapAttributes).map(([characteristic, value]) => {
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
        <button className="card__favorite" onClick={this.handleFavoriteClick}>
          <FavoriteIcon
            className={classNames('card__favorite-icon', { 'favorite-icon--active': favorite })}
          />
        </button>
      </div>
    );
  }
}

export default Card;
