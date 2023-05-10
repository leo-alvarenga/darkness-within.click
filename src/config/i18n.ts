import i18next, { i18n } from "i18next";
import { initReactI18next } from 'react-i18next';

import pt_BR from './locale/pt-BR.json';
import en_US from './locale/en-US.json';

export const locales = {
  'pt-BR': pt_BR,
  'en-US': en_US,
}

export const supportedLngs = ['en-US', 'pt-BR'];

i18next
  .use(initReactI18next)
  .init({
    supportedLngs,
    fallbackLng: 'en-US',
    resources: locales,
    defaultNS: 'locales',
  });

export default i18next;

export function getLocaleFromLS(): string {
  return localStorage.getItem('locale') || supportedLngs[0];
}

export function changeLanguage(locale: string, i18n: i18n): string | null {
  try {
    if (!supportedLngs.includes(locale)) throw new Error();

    localStorage.setItem('locale', locale);
    i18n.changeLanguage(locale);

    return locale;
  } catch(err) {
    return null;
  }
}
