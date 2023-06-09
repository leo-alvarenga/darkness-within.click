import { ToolCode } from '../common';

export interface NotificationDataType {
  title: string;
  icon?: string;
  body?: string;
  exclusiveTo?: string;
  recurseFrom?: string;
  alwaysShow?: boolean;
  redirect?: {
    to: string;
    label: string;
  };
}

export interface WorkspaceData {
  lastAcess: string;
  master?: ToolCode;
  child1?: ToolCode;
  child2?: ToolCode;
}

export interface ToDoTask {
  title: string;
  createdIn: string;
  finishedIn?: string;
}

export interface ToDoData {
  title: string;
  tasks: ToDoTask[];
}
