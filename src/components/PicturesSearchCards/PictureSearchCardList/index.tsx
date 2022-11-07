import React, { Component } from 'react';

import PictureSearchCard from 'components/PicturesSearchCards/PictureSearchCard';
import { PictureSearchCardListData } from 'types/serviceDataTypes';

import './PictureSearchCardList.scss';

interface PictureSearchCardListProps {
  picturesSearchCardsData: PictureSearchCardListData[];
}

class PictureSearchCardList extends Component<PictureSearchCardListProps> {
  constructor(props: PictureSearchCardListProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className="pictures-search-cards" data-testid="pictures-search-cards">
        <ul className="pictures-search-cards__list">
          {this.props.picturesSearchCardsData.map(({ id, ...otherData }) => (
            <li className="pictures-search-cards__item" key={id}>
              <PictureSearchCard pictureSearchCardData={otherData} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PictureSearchCardList;
