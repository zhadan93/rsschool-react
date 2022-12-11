import React, { useState } from 'react';

import { PictureSearchCardData } from 'types/serviceDataTypes';
import Modal from 'components/Modal';
import PicturesSearchCardPopUp from '../PictureSearchCardPopUp';
import pictureSearchDataHandling from 'helpers/pictureSearchDataHandling';
import Likes from '../Likes';

import './PictureSearchCard.scss';

type PictureSearchCardProps = {
  pictureSearchCardData: PictureSearchCardData;
};

const PictureSearchCard: React.FC<PictureSearchCardProps> = ({ pictureSearchCardData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prevState) => !prevState);
  };

  const { imgUrl, created_at, likes, tags } = pictureSearchCardData;
  const { convertDate, getTags } = pictureSearchDataHandling;

  const date = convertDate(created_at);
  const photoTags = getTags(tags.slice(0, 2));

  return (
    <>
      <div data-testid="picture-search-card" className="picture-search-card" onClick={toggleModal}>
        <img src={imgUrl} alt="img" className="picture-search-card__img" />
        <div className="picture-search-card__title">
          {date}
          <Likes likes={likes} className="picture-search-card__likes" />
          <span className="picture-search-card__tags">{photoTags}</span>
        </div>
      </div>
      {isOpen && (
        <Modal data-testid="picture-search-card-modal">
          <PicturesSearchCardPopUp
            onClose={toggleModal}
            pictureSearchCardData={{ ...pictureSearchCardData, created_at: date }}
          />
        </Modal>
      )}
    </>
  );
};

export default PictureSearchCard;
