import { ReactNode } from 'react';
import { PageInfo } from '../../context';

interface CommonProps {
  info: PageInfo;
}

export interface MasterProps {
  master: ReactNode;
  alone?: boolean;
}

export interface SlaveProps {
  child1?: ReactNode;
  child2?: ReactNode;
}

export interface MasterChildrenPageProps
  extends CommonProps,
    Omit<MasterProps, 'alone'>,
    SlaveProps {
  menuContent?: ReactNode;
  menuVisible: boolean;
  onMenuVisibilityChange: (value: boolean) => void;
}
