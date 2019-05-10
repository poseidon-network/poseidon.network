import NextI18Next from 'next-i18next';
// const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['zh-TW'],
});

export default NextI18NextInstance;

export const {
  appWithTranslation,
  withNamespaces,
  Link,
  i18n,
} = NextI18NextInstance;
