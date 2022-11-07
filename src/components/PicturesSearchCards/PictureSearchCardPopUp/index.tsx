import React from 'react';
import classNames from 'classnames';

import CloseButton from 'components/CloseButton';
import { PictureSearchCardData } from 'types/serviceDataTypes';
import PictureSearchCardPopUpCharacteristics from '../PictureSearchCardPopUpCharacteristics';

import './PictureSearchCardPopUp.scss';

type PictureSearchCardPopUpProps = {
  onClose: () => void;
  className?: string;
  pictureSearchCardData: PictureSearchCardData;
};

const PictureSearchCardPopUp = ({
  onClose,
  className,
  pictureSearchCardData,
}: PictureSearchCardPopUpProps) => {
  const { imgUrl, ...otherAttributes } = pictureSearchCardData;

  return (
    <div data-testid="picture-search-card-popup-wrapper">
      <div data-testid="overlay" className="overlay" onClick={onClose} />
      <div
        data-testid="picture-search-card-popup"
        className={classNames('picture-search-card-popup', className)}
      >
        <CloseButton
          data-testid="picture-search-card-popup-close-btn"
          className="picture-search-card-popup__close-btn"
          onClick={onClose}
        />
        <div className="picture-search-card-popup__personal">
          <img src={imgUrl} alt="img" className="picture-search-card-popup__img" />
        </div>
        <PictureSearchCardPopUpCharacteristics
          pictureSearchCardCharacteristicsData={otherAttributes}
        />
      </div>
    </div>
  );
};

export default PictureSearchCardPopUp;
