import React from 'react';
import classNames from 'classnames';
import './Icons.scss';

type FavoriteIconProps = {
  className: string;
};

const FavoriteIcon = ({ className }: FavoriteIconProps): JSX.Element => {
  return (
    <svg
      fill="none"
      className={classNames('favorite-icon', className)}
      width="40"
      height="40"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M19.7,0.5H4.3c-2.1,0-3.8,1.7-3.8,3.8v15.4c0,2.1,1.7,3.8,3.8,3.8h15.4c2.1,0,3.8-1.7,3.8-3.8V4.3   C23.5,2.2,21.8,0.5,19.7,0.5z M9.4,18.1c-0.2,0-0.3,0.1-0.4,0.1c-0.2,0-0.7-0.1-0.7-0.8c0.3-2.2-0.5-2.9-1.5-3.8   C6,12.8,5.1,11.9,4.9,10C4.9,8.9,5.3,7.9,6,7.1c0.7-0.8,1.8-1.2,2.8-1.3h0c1.4,0,2.7,0.7,3.4,1.9c0.7-0.9,1.8-1.4,3-1.4l0.1,0   c1,0,2,0.5,2.7,1.3c0.7,0.8,1.1,1.8,1.1,2.9C19,13.6,15.7,16.2,9.4,18.1z" />
      </g>
    </svg>
  );
};

export default FavoriteIcon;
