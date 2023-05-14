import { useEffect, useMemo, useState } from 'react';

import Notification from './Notification';
import { useApp } from '../../../context';

function FloatingArea() {
  const { data } = useApp();
  const notifications = useMemo(() => data.notifications, [data]);

  const [displayNotifications, setNotificationVisbility] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setNotificationVisbility(!!notifications), 1400);

    return () => clearTimeout(timer);
  }, [notifications]);

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
      {displayNotifications && notifications?.map((n) => <Notification {...n} />)}
    </span>
  );
}

export default FloatingArea;
