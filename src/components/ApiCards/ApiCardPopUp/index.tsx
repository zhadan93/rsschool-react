import React, { Fragment } from 'react';
import classNames from 'classnames';

import CloseButton from 'components/CloseButton';
import { PhotoCardData } from 'types/serviceDataTypes';
import apiDataHandling from 'helpers/apiDataHandling';
import LikeIcon from 'components/Icons/LikeIcon';

import './ApiCardPopUp.scss';

type ApiCardPopUpProps = {
  onClose: () => void;
  className?: string;
  apiCardData: PhotoCardData;
};

const ApiCardPopUp = ({ onClose, className, apiCardData }: ApiCardPopUpProps) => {
  const { imgUrl, likes, tags, width, height } = apiCardData;
  const mapAttributes = new Map(Object.entries(apiCardData));
  mapAttributes.delete('id');
  mapAttributes.delete('imgUrl');

  const { getTags } = apiDataHandling;
  const photoLikes = (
    <span className="api-card-popup__likes">
      <LikeIcon className="api-card-popup__icon" />
      {likes}
    </span>
  );

  const photoTags = getTags(tags);

  const defaultData: Record<
    string,
    { name?: string; measureUnit?: string; value?: JSX.Element | string }
  > = {
    created_at: { name: 'creation date' },
    userName: { name: 'user name' },
    height: { value: `${height}px` },
    width: { value: `${width}px` },
    likes: { value: photoLikes },
    tags: { value: photoTags },
  };

  return (
    <div data-testid="api-card-popup-wrapper">
      <div data-testid="overlay" className="overlay" onClick={onClose} />
      <div data-testid="api-card-popup" className={classNames('api-card-popup', className)}>
        <CloseButton
          data-testid="api-card-popup-close-btn"
          className="api-card-popup__close-btn"
          onClick={onClose}
        />
        <div className="api-card-popup__personal">
          <img src={imgUrl} alt="img" className="api-card-popup__img" />
        </div>
        <div className="api-card-popup__characteristics">
          <h4 className="api-card-popup__characteristics-title">Characteristics</h4>
          <ul className="api-card-popup__characteristics-list">
            {Array.from(mapAttributes).map(([characteristic, value]) => {
              return (
                <Fragment key={characteristic}>
                  {((Array.isArray(value) && value.length) || (!Array.isArray(value) && value)) && (
                    <li className="api-card-popup__characteristics-item">
                      <span className="api-card-popup__characteristics-name">
                        {defaultData[characteristic]?.name || characteristic}
                      </span>
                      {defaultData[characteristic]?.value || value}
                    </li>
                  )}
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ApiCardPopUp;
