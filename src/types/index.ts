export interface NotificationDataType {
  title: string;
  icon?: string;
  body?: string;
  alwaysShow?: boolean;
  redirect?: {
    to: string;
    label: string;
  };
}
