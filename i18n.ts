import NextI18Next from 'next-i18next';

const otherLanguages = ['zh-TW', 'zh-CN', 'ja'];
const NextI18NextInstance = new NextI18Next({
  otherLanguages,
  defaultLanguage: 'en',
  fallbackLng: 'en',
  keySeparator: false,
  react: {
    wait: true,
    useSuspense: false,
  },
});

// For next export static
NextI18NextInstance.i18n.languages = ['en', ...otherLanguages];

export default NextI18NextInstance;

export const {
  appWithTranslation,
  withTranslation,
  Link,
  i18n,
} = NextI18NextInstance;
