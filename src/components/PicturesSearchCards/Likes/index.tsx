import React from 'react';
import LikeIcon from 'components/Icons/LikeIcon';

import classNames from 'classnames';
import './Likes.scss';

type LikesProps = {
  className?: string;
  likes: number;
};

const Likes = ({ likes, className }: LikesProps) => {
  return (
    <span className={classNames('likes', className)}>
      <LikeIcon className="likes__icon" />
      {likes}
    </span>
  );
};

export default Likes;
