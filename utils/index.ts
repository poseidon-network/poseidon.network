import { whitepaperList } from '../data';

export const getWhitepaper = (lang: string) => {
  const whitePaper = whitepaperList.find(paper => paper.lang === lang);
  if (whitePaper) {
    return whitePaper;
  }
  return whitepaperList[0];
};
