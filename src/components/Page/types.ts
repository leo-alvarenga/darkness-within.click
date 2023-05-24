import { ReactNode } from 'react';
import { PageInfo } from '../../context';

export interface PageProps {
  info: PageInfo;
  children?: ReactNode;
}
