import { PropsWithChildren, createContext, useCallback, useContext, useState } from 'react';
import { PageInfo, defaultValue } from './util';
import { NotificationDataType } from '../../types';

export const AppContext = createContext(defaultValue);

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  return useContext(AppContext);
}

function AppProvider({ children }: PropsWithChildren) {
  const [value, setValue] = useState(defaultValue);

  const setCurrentPage = useCallback(
    (currentPage: PageInfo) => {
      setValue({
        ...value,
        data: {
          ...value.data,
          currentPage,
        },
      });
    },
    [value],
  );

  const setNotifications = useCallback(
    (notifications: NotificationDataType[]) => {
      setValue({
        ...value,
        data: {
          ...value.data,
          notifications,
        },
      });
    },
    [value],
  );

  return (
    <AppContext.Provider
      value={{
        data: value.data,
        setCurrentPage,
        setNotifications,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
