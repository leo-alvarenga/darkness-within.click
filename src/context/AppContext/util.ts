import { NotificationDataType } from '../../types';

export interface PageInfo {
  title: string;
  path: string;
}

export interface AppValues {
  currentPage: PageInfo;
  notifications: NotificationDataType[];
}

export interface AppContextProps {
  data: AppValues;
  setCurrentPage: (current: PageInfo) => void;
  setNotifications: (notifications: NotificationDataType[]) => void;
}

export const defaultValue: AppContextProps = {
  data: {
    currentPage: {
      title: '',
      path: '',
    },
    notifications: [
      {
        title: 'page.tools.workspace.notification.title',
        icon: 'fa-solid fa-lightbulb',
        alwaysShow: false,
        exclusiveTo: '/tools/workspace',
      },
      {
        title: 'page.tools.workspace.notification.more',
        icon: 'fa-solid fa-hard-drive',
        alwaysShow: false,
        recurseFrom: '/tools',
      },
      {
        title: 'page.home.notification.title',
        icon: 'fa-solid fa-lightbulb',
        redirect: {
          to: 'https://leo-alvarenga.click',
          label: 'page.home.notification.label',
        },
      },
    ],
  },
  setCurrentPage: () => null,
  setNotifications: () => null,
};
