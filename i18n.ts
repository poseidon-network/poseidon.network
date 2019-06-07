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

export default NextI18NextInstance;

export const {
  appWithTranslation,
  withNamespaces,
  Link,
  i18n,
} = NextI18NextInstance;
