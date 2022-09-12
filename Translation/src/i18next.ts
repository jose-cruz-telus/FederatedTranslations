import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  //   .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next 
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    resources: {
      en: {
        translations: {
          "hw": "Hello World!",
          "Translations": "Welcome to Translations",
          "a2b": "App2 Button",
          "App1": "Mocked Host",
          "noMFE": "Select the app to run!",
          "App3Sub": "Translated subtittle!"
        },
      },
      es: {
        translations: {
          "hw": 'Hola Mundo',
          "Translations": "Bienvenidos a Traducciones",
          "a2b": "Boton de App2",
          "App1": "Anfitrion de Prueba",
          "noMFE": "Selecciona la aplicacion.",
          "App3Sub": "Subtitulos Traducidos."
        },
      },
    },

    ns: ["translations"],
    defaultNS: "translations",

    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: true,
      }  
  });

export default i18n;
