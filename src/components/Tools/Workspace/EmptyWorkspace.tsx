import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

function EmptyWorkspace() {
  const { t } = useTranslation();

  const commonClasses = useMemo(() => 'text-lg', []);

  return (
    <section className='flex flex-col items-center gap-8'>
      <h1 className='text-4xl max-xl:text-xl'>{t('page.tools.workspace.usage.title')}</h1>

      <section id='details' className='bg-background rounded-lg p-4'>
        <ul className='bg-black2 p-2 rounded-lg flex flex-col list-none'>
          <li className={commonClasses}>{t('page.tools.workspace.usage.description.1')}</li>
          <li className={commonClasses}>{t('page.tools.workspace.usage.description.2.0')}</li>
          <li className={`${commonClasses} pl-8`}>
            {t('page.tools.workspace.usage.description.2.1')}
          </li>
          <li className={commonClasses}>{t('page.tools.workspace.usage.description.3.0')}</li>
          <li className={`${commonClasses} pl-8`}>
            {t('page.tools.workspace.usage.description.3.1')}
          </li>
          <li className={`${commonClasses} pl-8`}>
            {t('page.tools.workspace.usage.description.3.2')}
          </li>
          <li className={`${commonClasses} pl-8`}>
            {t('page.tools.workspace.usage.description.3.3')}
          </li>
          <li className={`${commonClasses} pl-8`}>
            {t('page.tools.workspace.usage.description.3.4')}
          </li>
          <li className={commonClasses}>{t('page.tools.workspace.usage.description.4')}</li>
        </ul>
      </section>
    </section>
  );
}

export default EmptyWorkspace;
