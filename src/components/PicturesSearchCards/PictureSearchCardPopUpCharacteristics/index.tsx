import React, { Fragment } from 'react';
import { PictureSearchCardData } from 'types/serviceDataTypes';
import pictureSearchDataHandling from 'helpers/pictureSearchDataHandling';
import Likes from '../Likes';

import './PictureSearchCardPopUpCharacteristics.scss';

type PictureSearchCardPopUpCharacteristicsProps = {
  className?: string;
  pictureSearchCardCharacteristicsData: Omit<PictureSearchCardData, 'imgUrl'>;
};

const PictureSearchCardPopUpCharacteristics = ({
  pictureSearchCardCharacteristicsData,
}: PictureSearchCardPopUpCharacteristicsProps) => {
  const { likes, tags, width, height } = pictureSearchCardCharacteristicsData;

  const defaultData: Record<string, { name?: string }> = {
    created_at: { name: 'creation date' },
    userName: { name: 'user name' },
  };

  const { getTags } = pictureSearchDataHandling;

  const photoTags = getTags(tags);

  const data = {
    ...pictureSearchCardCharacteristicsData,
    height: `${height}px`,
    width: `${width}px`,
    likes: <Likes likes={likes} className="picture-search-card-popup-characteristics__likes" />,
    tags: photoTags,
  };

  return (
    <div className="picture-search-card-popup-characteristics">
      <h4 className="picture-search-card-popup-characteristics__title">Characteristics</h4>
      <ul className="picture-search-card-popup-characteristics__list">
        {Object.entries(data).map(([characteristic, value]) => {
          return (
            <Fragment key={characteristic}>
              {((Array.isArray(value) && value.length) || (!Array.isArray(value) && value)) && (
                <li className="picture-search-card-popup-characteristics__item">
                  <>
                    <span className="picture-search-card-popup-characteristics__name">
                      {defaultData[characteristic]?.name || characteristic}
                    </span>
                    {value}
                  </>
                </li>
              )}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default PictureSearchCardPopUpCharacteristics;
