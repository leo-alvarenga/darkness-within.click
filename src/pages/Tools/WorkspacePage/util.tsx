import { ReactNode } from 'react';
import { ToolCode } from '../../../common';
import { Chmod } from '../../../components';

export const toolMap: Record<ToolCode, ReactNode> = {
  chmod: <Chmod />,
  todo: <></>,
};
