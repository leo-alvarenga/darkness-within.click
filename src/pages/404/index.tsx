import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import { Page } from '../../components';

function NotFound() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();

  const from = useMemo(() => searchParams.get('from'), [searchParams]);

  return (
    <Page
      info={{
        title: 'page.404.alt',
        path: '*'
      }}
    >
      <h1 className='text-3xl'>{t('page.404.title')}</h1>
      <span className='text-xl'>{t('page.404.description')}</span>
      <a
        className='px-2 py-2 bg-background rounded-lg hover:scale-110 transition-all'
        href={from || '/'}
      >
        {t('page.404.goBack')}
      </a>
    </Page>
  );
}

export default NotFound;
