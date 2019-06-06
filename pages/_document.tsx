import Document, { Main, Head, NextScript } from 'next/document';
import { styles } from '../constants';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <style>{`
          html, body {
            width: 100%;
            height: 100%;
            background: ${styles.darkLight};
          }
        `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
