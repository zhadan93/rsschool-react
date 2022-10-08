import React, { Component } from 'react';
import classNames from 'classnames';

import Icons from 'components/Icons';

import './Card.scss';

import { CardDataDetails } from '../../types/types';

type CardProps = {
  cardData: CardDataDetails;
};

type CardState = Pick<CardDataDetails, 'favorite'>;

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
        <img src={require(`../../assets/img/${id}.jpg`)} alt={name} className="card__img" />
        <div className="card__main-content">
          <div className="card__name">{name}</div>
          <div className="card__description">{description}</div>
        </div>
        <div className="card__characteristics">
          <h3 className="card__characteristic-title">Characteristics</h3>
          {Array.from(mapAttributes).map(([characteristic, value]) => (
            <div key={characteristic} className="card__characteristic">
              <span className="card__characteristic--bold">{characteristic}</span>
              <span className="card__dotted-line"></span>
              {value}
            </div>
          ))}
        </div>
        <div className="card__favorite" onClick={this.handleFavoriteClick}>
          <Icons
            id="favorite"
            className={classNames('card__favorite-icon', { 'favorite-icon--active': favorite })}
          />
        </div>
      </div>
    );
  }
}

export default Card;
