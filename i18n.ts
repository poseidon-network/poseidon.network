import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['zh-TW'],
  fallbackLng: 'en',
  keySeparator: false,
  react: {
    wait: true,
  },
});

// if (typeof window === 'undefined') {
//   // For next export static
//   NextI18NextInstance.i18n.languages = ['en', 'zh-TW'];
//   NextI18NextInstance.i18n.language = 'en';
// } else {
//   const lang = NextI18NextInstance.i18n.services.languageDetector.detect(['localStorage']);
//   NextI18NextInstance.i18n.changeLanguage(lang);
//   try {
//     localStorage.setItem('i18nextLng', lang);
//   } catch (error) {
//     console.log(error);
//   }
// }

export default NextI18NextInstance;

export const {
  appWithTranslation,
  withNamespaces,
  Link,
  i18n,
} = NextI18NextInstance;
