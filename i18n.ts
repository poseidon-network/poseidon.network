import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['zh-TW'],
  fallbackLng: 'en',
  keySeparator: false,
  react: {
    wait: true,
    useSuspense: false,
  },
});

// For next export static
NextI18NextInstance.i18n.languages = ['en', 'zh-TW'];

export default NextI18NextInstance;

export const {
  appWithTranslation,
  withTranslation,
  Link,
  i18n,
} = NextI18NextInstance;
