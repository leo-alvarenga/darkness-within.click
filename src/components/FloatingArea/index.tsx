import { useEffect, useMemo, useState } from 'react';

import Notification from './Notification';
import { useApp } from '../../context';

function FloatingArea() {
  const {
    data: { notifications },
  } = useApp();

  const filteredNotifications = useMemo(() => {
    let path = location.pathname;
    
    if (path.includes('/?')) path = path.split('/?')[0];
    else if (path.charAt(path.length - 1) === '/') path = path.slice(0, path.length - 1);

    if (!notifications || notifications.length <= 0) return undefined;

    const n = notifications.filter(({ exclusiveTo }) => !exclusiveTo || exclusiveTo === path);

    return n;
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
