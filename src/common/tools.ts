import { paths } from "./";

/** Unique codename for each tool available on the Workspace  */
export type ToolCode = 'chmod' | 'todo';

/** ToolInfo */
export interface ToolInfo {
  name: string;
  description: string;
  path: string;
  icon?: string;
  masterOnly?: boolean;
  code: ToolCode;
}

export const WORKSPACE_INFO: Omit<ToolInfo, 'code'> = {
  name: 'page.tools.workspace.title',
  description: 'page.tools.workspace.description',
  path: paths.TOOLS.WORKSPACE,
  icon: 'fa-solid fa-window-restore',
};

export const CHMOD_INFO: ToolInfo = {
  name: 'page.tools.chmod.title',
  description: 'page.tools.chmod.description',
  path: paths.TOOLS.CHMOD,
  icon: 'fa-solid fa-key',
  masterOnly: false,
  code: 'chmod',
};

export const TODO_INFO: ToolInfo = {
  name: 'page.tools.todo.title',
  description: 'page.tools.todo.description',
  path: paths.TOOLS.TODO,
  icon: 'fa-solid fa-list-check',
  masterOnly: false,
  code: 'todo',
};

export const availableTools = [WORKSPACE_INFO, CHMOD_INFO, TODO_INFO];
export const availableToolsOnWorkspace: ToolInfo[] = [CHMOD_INFO, TODO_INFO];
