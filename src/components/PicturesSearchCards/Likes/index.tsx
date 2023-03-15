import React from 'react';
import LikeIcon from 'components/Icons/LikeIcon';

import classNames from 'classnames';
import './Likes.scss';

type LikesProps = {
  className?: string;
  likes: number;
};

const Likes: React.FC<LikesProps> = ({ likes, className }) => {
  return (
    <span data-testid="picture-search-card-likes" className={classNames('likes', className)}>
      <LikeIcon className="likes__icon" />
      {likes}
    </span>
  );
};

export default Likes;
