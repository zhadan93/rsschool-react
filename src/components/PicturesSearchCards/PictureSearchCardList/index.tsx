import React from 'react';

import PictureSearchCard from 'components/PicturesSearchCards/PictureSearchCard';
import { PictureSearchCardListData } from 'types/serviceDataTypes';

import './PictureSearchCardList.scss';

type PictureSearchCardListProps = {
  picturesSearchCardsData: PictureSearchCardListData[];
};

const PictureSearchCardList: React.FC<PictureSearchCardListProps> = ({
  picturesSearchCardsData,
}) => {
  return (
    <div className="pictures-search-cards" data-testid="pictures-search-cards">
      <ul className="pictures-search-cards__list">
        {picturesSearchCardsData.map(({ id, ...otherData }) => (
          <li className="pictures-search-cards__item" key={id}>
            <PictureSearchCard pictureSearchCardData={otherData} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PictureSearchCardList;
