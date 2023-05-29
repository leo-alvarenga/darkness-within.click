import { useEffect, useState } from 'react';
import { Page } from '../../../components';
import { useTranslation } from 'react-i18next';

const messages = [
  'page.tools.workspace.loading.1',
  'page.tools.workspace.loading.2',
  'page.tools.workspace.loading.3',
  'page.tools.workspace.loading.4',
];

function Spinner() {
  const { t } = useTranslation();

  const [currMsg, setCurrMsg] = useState<string>();

  useEffect(() => {
    const timer = setInterval(() => {
      const index = Math.floor(Math.random() * 10) % messages.length;

      setCurrMsg(messages[index]);
    }, 700);

    return () => clearInterval(timer);
  }, []);

  return (
    <Page info={{ title: '', path: '' }}>
      <h1>{t('page.tools.workspace.loading.0')}</h1>

      <h4>{t(currMsg || '...')}</h4>

      <span
        className={`
        w-24 h-24 rounded-[50%]
        border-8 border-foreground
        flex flex-row animate-blink
        items-center justify-center
      `}
      >
        <span
          className={`
          w-20 h-20 rounded-[50%]
          border-8 border-x-red-500
          border-y-transparent
          flex flex-row animate-spin 
          items-center justify-center
        `}
        />
      </span>
    </Page>
  );
}

export default Spinner;
