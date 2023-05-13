import { useEffect, useState } from "react";

import Notification from "./Notification";
import { NotificationDataType } from "../../../types";

export interface FloatingAreaProps {
  notifications?: NotificationDataType[];
}

function FloatingArea({ notifications }: FloatingAreaProps) {
  const [displayNotifications, setNotificationVisbility] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => setNotificationVisbility(!!notifications),
      2000,
    );

    return () => clearTimeout(timer);
  }, []);

  return (
    <span id="corner-area" 
      className={`
        fixed bottom-4 left-3 w-96
        flex flex-col max-xl:pr-6
        gap-2 max-xl:w-full
        transition-all
        z-50
      `}
    >
      {displayNotifications && notifications?.map((n) => <Notification { ...n } />)}
    </span>
  );
}

export default FloatingArea;