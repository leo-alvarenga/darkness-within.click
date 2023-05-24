export interface NotificationDataType {
  title: string;
  icon?: string;
  body?: string;
  exclusiveTo?: string;
  alwaysShow?: boolean;
  redirect?: {
    to: string;
    label: string;
  };
}
