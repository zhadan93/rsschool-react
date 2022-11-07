import React, { Component } from 'react';

import { PictureSearchCardData } from 'types/serviceDataTypes';
import Modal from 'components/Modal';
import PicturesSearchCardPopUp from '../PictureSearchCardPopUp';
import pictureSearchDataHandling from 'helpers/pictureSearchDataHandling';
import Likes from '../Likes';

import './PictureSearchCard.scss';

type PictureSearchCardProps = {
  pictureSearchCardData: PictureSearchCardData;
};

type PictureSearchCardState = {
  isOpen: boolean;
};

class PictureSearchCard extends Component<PictureSearchCardProps, PictureSearchCardState> {
  constructor(props: PictureSearchCardProps) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggleModal() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const { imgUrl, created_at, likes, tags } = this.props.pictureSearchCardData;
    const { convertDate, getTags } = pictureSearchDataHandling;

    const date = convertDate(created_at);
    const photoTags = getTags(tags.slice(0, 2));

    return (
      <>
        <div
          data-testid="picture-search-card"
          className="picture-search-card"
          onClick={this.toggleModal}
        >
          <img src={imgUrl} alt="img" className="picture-search-card__img" />
          <div className="picture-search-card__title">
            {date}
            <Likes likes={likes} className="picture-search-card__likes" />
            <span className="picture-search-card__tags">{photoTags}</span>
          </div>
        </div>
        {this.state.isOpen && (
          <Modal data-testid="picture-search-card-modal">
            <PicturesSearchCardPopUp
              onClose={this.toggleModal}
              pictureSearchCardData={{ ...this.props.pictureSearchCardData, created_at: date }}
            />
          </Modal>
        )}
      </>
    );
  }
}

export default PictureSearchCard;
