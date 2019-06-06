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

// For next export static
NextI18NextInstance.i18n.languages = ['en'];
NextI18NextInstance.i18n.language = 'en';

export default NextI18NextInstance;

export const {
  appWithTranslation,
  withNamespaces,
  Link,
  i18n,
} = NextI18NextInstance;
