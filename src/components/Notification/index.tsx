import React from 'react';
import classNames from 'classnames';

import './Notification.scss';

type NotificationProps = {
  className?: string;
  type: 'success';
  message: string;
  title?: string;
  isSuccessful?: boolean;
};

const Notification = ({ isSuccessful, className, type, message, title }: NotificationProps) => {
  return (
    <div
      className={classNames(
        'notification',
        { 'notification--success': type === 'success', valid: isSuccessful },
        className
      )}
    >
      <span
        className={classNames('notification__indicate', {
          'notification__indicate--success': type === 'success',
        })}
      ></span>
      {title && <h6 className="notification__title">{title}</h6>}
      {message}
    </div>
  );
};

export default Notification;
