import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ChmodTable from './ChmodTable';
import { Page } from '../../../components';
import { Code, defaultCodes } from './util';

function Chmod() {
  const { t } = useTranslation();
  const [code, setCode] = useState<Code>(defaultCodes);

  const copyToClipboard = useCallback((value: string) => {
    navigator.clipboard.writeText(value);
  }, []);

  return (
    <Page
      info={{
        title: 'page.tools.chmod.title',
        path: '/tools/chmod'
      }}
    >
      <h1 className='text-4xl max-lg:text-xl font-bold'>{t('page.tools.chmod.title')}</h1>
      <p className='text-xl max-lg:text-md'>{t('page.tools.chmod.description')}</p>

      <ChmodTable onChange={(numeric, symbolic) => setCode({ numeric, symbolic })} />

      <div className='text-lg flex flex-row gap-4'>
        {Object.entries(code).map(([k, v]) => (
          <div className='text-center items-center flex flex-col gap-2 p-2'>
            <h3>{t(`page.tools.chmod.${k}`)}</h3>
            <span
              className='w-fit p-2 rounded-lg bg-background select-all'
              onClick={() => copyToClipboard(v)}
            >
              {v}
            </span>
          </div>
        ))}
      </div>

      <section
        id='details'
        className='bg-background rounded-lg max-w-[70%] p-4 gap-4 max-lg:max-w-full flex flex-col items-center'
      >
        <div className='bg-black2 p-2 rounded-lg'>
          <h3 className='text-xl font-bold max-lg:text-lg mb-2'>
            {t('page.tools.chmod.usage.title')}
          </h3>
          <span>{t('page.tools.chmod.usage.description')}</span>
        </div>
        <div className='bg-black2 p-2 rounded-lg'>
          <h3 className='text-xl font-bold max-lg:text-lg mb-2'>
            {t('page.tools.chmod.permissions.title')}
          </h3>
          <span>{t('page.tools.chmod.permissions.description')}</span>
        </div>
      </section>
    </Page>
  );
}

export default Chmod;
