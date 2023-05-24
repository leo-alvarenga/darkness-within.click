import { useEffect, useMemo, useState } from 'react';

import Notification from './Notification';
import { useApp } from '../../context';

function FloatingArea() {
  const {
    data: { notifications },
  } = useApp();

  const filteredNotifications = useMemo(() => {
    const path = location.pathname;

    if (!notifications || notifications.length <= 0) return undefined;

    return notifications.filter(({ exclusiveTo }) => !exclusiveTo || exclusiveTo === path);
  }, [notifications]);

  const [displayNotifications, setNotificationVisbility] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setNotificationVisbility(!!filteredNotifications), 1400);

    return () => clearTimeout(timer);
  }, [filteredNotifications]);

  return (
    <span
      id='corner-area'
      className={`
        fixed bottom-4 left-3 w-96
        flex flex-col max-xl:pr-6
        gap-2 max-xl:w-full
        transition-all
        z-50
      `}
    >
      {displayNotifications && filteredNotifications?.map((n) => <Notification {...n} />)}
    </span>
  );
}

export default FloatingArea;
