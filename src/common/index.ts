export const paths = {
  HOME: '/',
  TOOLS: {
    root: '/tools',
    CHMOD: '/tools/chmod',
    WORKSPACE: '/tools/workspace',
  },
};

// #region TOOLS

export type TOOL_CODENAME = 'chmod';

export interface ToolInfo {
  name: string;
  description: string;
  path: string;
  icon?: string;
  masterOnly?: boolean;
  code: TOOL_CODENAME;
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

export const availableTools = [WORKSPACE_INFO, CHMOD_INFO];
export const availableToolsOnWorkspace: ToolInfo[] = [CHMOD_INFO];

// #endregion TOOLS

export const pathArray = [
  {
    name: 'page.home.title',
    path: paths.HOME,
    icon: 'fa-solid fa-house-chimney',
  },
  {
    name: 'page.tools.title',
    path: paths.TOOLS.root,
    icon: 'fa-solid fa-toolbox',
  },
];
