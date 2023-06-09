import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supportedLngs, changeLanguage } from '../../config/i18n';

import LangButton from './LangButton';

function LanguageSwitch() {
  const { i18n } = useTranslation();

  const options = useMemo(() => (supportedLngs.length > 0 ? supportedLngs : ['en_US']), []);

  const [selected, setSelected] = useState(i18n.language);

  const handleLangChange = useCallback(
    (lang: string) => {
      setSelected(lang);
      changeLanguage(lang, i18n);
    },
    [i18n],
  );

  return (
    <div className='flex flex-row gap-0 items-center w-fit h-fit ml-auto overflow-hidden rounded-lg'>
      {options.map((lang, index) => (
        <LangButton
          key={`${index}-${lang}`}
          value={lang}
          selected={selected === lang}
          onClick={handleLangChange}
        />
      ))}
    </div>
  );
}

export default LanguageSwitch;
