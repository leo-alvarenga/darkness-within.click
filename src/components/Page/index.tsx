import { ReactNode, useEffect } from 'react';

import LanguageSwitch from './LanguageSwitch';
import FloatingArea from './FloatingArea';
import LinkArea from './LinkArea';
import { PageInfo, useApp } from '../../context/AppContext';

export interface PageProps {
  info: PageInfo;
  children?: ReactNode;
}

function Page({ info, children }: PageProps) {
  const { setCurrentPage } = useApp();

  useEffect(() => setCurrentPage(info), [info, setCurrentPage]);
  
  return (
    <div className='flex justify-center min-h-[100vh] h-[100%] bg-background p-8 max-xl:p-4 select-none'>
      <div className='flex items-center flex-col gap-4 w-[60%] max-xl:w-full h-fit p-4 mb-28 rounded-lg bg-black2 text-foreground'>
        <div className='flex w-[100%] items-start'>
          <FloatingArea />
          <LinkArea />
          <LanguageSwitch />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Page;
