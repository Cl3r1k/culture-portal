import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJson from './en.json';
import ruJson from './ru.json';
import byJson from './by.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enJson,
    },
    ru: {
      translation: ruJson,
    },
    by: {
      translation: byJson,
    },
  },
  lng: 'ru',
  fallbackLng: 'ru',
  debug: false,

  // keySeparator: true,

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
