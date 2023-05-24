import { ReactNode } from 'react';
import { TOOL_CODENAME } from '../../../common';
import { Chmod } from '../../../components';

export interface WorkspaceData {
  lastAcess: string;
  master?: TOOL_CODENAME;
  child1?: TOOL_CODENAME;
  child2?: TOOL_CODENAME;
}

export const toolMap: Record<TOOL_CODENAME, ReactNode> = {
  chmod: <Chmod />,
};
