import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  lng: 'ru',

  fallbackLng: 'ru',

  debug: true,

  interpolation: {
    escapeValue: false
  },

  resources: { ru: { translationsNS: {} } }
});

export { i18n as i18nForTest };
