import React, { forwardRef, ForwardedRef } from 'react';
import classNames from 'classnames';

import './Notification.scss';

type NotificationProps = {
  className?: string;
  notificationRef?: ForwardedRef<HTMLDivElement>;
  type: 'success';
  message: string;
  title?: string;
  isSuccessful?: boolean;
};

const Notification = ({
  isSuccessful,
  className,
  notificationRef,
  type,
  message,
  title,
}: NotificationProps) => {
  return (
    <div
      className={classNames(
        'notification',
        { 'notification--success': type === 'success', valid: isSuccessful },
        className
      )}
      ref={notificationRef}
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

export const NotificationWithRef = forwardRef<HTMLDivElement, NotificationProps>((props, ref) => (
  <Notification {...props} notificationRef={ref} />
));
