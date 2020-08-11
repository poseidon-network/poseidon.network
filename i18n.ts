const NextI18Next = require('next-i18next/dist/commonjs').default;

const otherLanguages = ['zh-TW', 'zh-CN', 'ja', 'ko', 'vi', 'th', 'ru'];
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
