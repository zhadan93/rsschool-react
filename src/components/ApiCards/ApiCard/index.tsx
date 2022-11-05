import React, { Component } from 'react';

import { PhotoCardData } from 'types/serviceDataTypes';
import Modal from 'components/Modal';
import ApiCardPopUp from '../ApiCardPopUp';
import LikeIcon from 'components/Icons/LikeIcon';
import apiDataHandling from 'helpers/apiDataHandling';

import './ApiCard.scss';

type ApiCardProps = {
  apiCardData: PhotoCardData;
};

type ApiCardState = {
  isOpen: boolean;
};

class ApiCard extends Component<ApiCardProps, ApiCardState> {
  constructor(props: ApiCardProps) {
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
    const { imgUrl, created_at, likes, tags } = this.props.apiCardData;
    const { convertDate, getTags } = apiDataHandling;

    const date = convertDate(created_at);
    const photoTags = getTags(tags.slice(0, 2));

    return (
      <>
        <div data-testid="api-card" className="api-card" onClick={this.toggleModal}>
          <img src={imgUrl} alt="img" className="api-card__img" />
          <div className="api-card__title">
            {date}
            <span className="api-card__likes">
              <LikeIcon className="api-card__icon" />
              {likes}
            </span>
            <span className="api-card__tags">{photoTags}</span>
          </div>
        </div>
        {this.state.isOpen && (
          <Modal data-testid="api-card-modal">
            <ApiCardPopUp
              onClose={this.toggleModal}
              apiCardData={{ ...this.props.apiCardData, created_at: date }}
            />
          </Modal>
        )}
      </>
    );
  }
}

export default ApiCard;
