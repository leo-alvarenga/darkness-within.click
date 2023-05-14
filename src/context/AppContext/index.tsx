import { PropsWithChildren, createContext, useCallback, useContext, useState } from 'react';
import { PageInfo, defaultValue } from './util';
import { NotificationDataType } from '../../types';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line react-refresh/only-export-components
export * from './util';

export const AppContext = createContext(defaultValue);

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  return useContext(AppContext);
}

function AppProvider({ children }: PropsWithChildren) {
  const { t } = useTranslation();
  const [value, setValue] = useState(defaultValue);

  const setCurrentPage = useCallback(
    (currentPage: PageInfo) => {
      if (currentPage.title.length > 1) {
        document.title = `Darkness within - ${t(currentPage.title)}`;
      }

      setValue({
        ...value,
        data: {
          ...value.data,
          currentPage,
        },
      });
    },
    [t, value],
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
