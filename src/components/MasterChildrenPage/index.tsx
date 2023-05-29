import React, { ReactNode, useEffect, useMemo, useState } from 'react';

import { useApp } from '../../context';
import FloatingArea from '../FloatingArea';
import { MasterChildrenPageProps, MasterProps, SlaveProps } from './types';
import Statusbar from '../Statusbar';

const commonClasses = `
  flex flex-col items-center
  overflow-x-hidden p-2 gap-2
  bg-black2 rounded-lg
`;

function MasterChildrenPage({
  info,
  child1,
  child2,
  master,
  menuContent,
  menuVisible,
  onMenuVisibilityChange,
}: MasterChildrenPageProps) {
  const { setCurrentPage } = useApp();
  const [set, setPage] = useState(false);

  useEffect(() => {
    if (!set) {
      setCurrentPage(info);
      setPage(true);
    }
  }, [info, set, setCurrentPage]);

  return (
    <div className='flex flex-col max-lg:h-full h-[100vh] max-lg:min-h-[100vh] overflow-hidden max-lg:overflow-visible bg-background text-foreground p-0 select-none'>
      <FloatingArea />
      <Statusbar
        timeFormat='HH:mm'
        menuContent={menuContent}
        menuVisible={menuVisible}
        onMenuVisibilityChange={onMenuVisibilityChange}
      />

      {master ? (
        <div className='flex-grow overflow-hidden max-lg:overflow-visible p-4 flex flex-row max-xl:flex-col flex-wrap gap-4'>
          <Master master={master} alone={!child1 && !child2} />
          <Slave child1={child1} child2={child2} />
        </div>
      ) : null}
    </div>
  );
}

const Master = ({ master, alone }: MasterProps) => (
  <div
    className={`
    ${alone ? 'w-full max-w-full' : 'w-[55%] max-w-[55%]'} 
    max-lg:w-full max-lg:max-w-full
    max-h-full ${commonClasses}
  `}
  >
    {master}
  </div>
);

const Slave = ({ child1, child2 }: SlaveProps) => {
  const content = useMemo(() => {
    if (!child1 && !child2) return null;

    const res: ReactNode[] = [];

    if (child1) res.push(child1);
    if (child2) res.push(child2);

    return res;
  }, [child1, child2]);

  return content && content.length > 0 ? (
    <div className='flex-grow w-[40%] max-h-full max-lg:w-full max-lg:max-h-full flex flex-col gap-4'>
      {content.map((c) => (
        <div
          className={`
              ${content.length > 1 ? 'h-[50%]' : 'h-full'} 
              ${commonClasses}`}
        >
          {c}
        </div>
      ))}
    </div>
  ) : null;
};

export default MasterChildrenPage;
