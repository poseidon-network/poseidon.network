import * as express from 'express';
import * as next from 'next';
import * as compression from 'compression';
// @ts-ignore
import nextI18NextMiddleware from 'next-i18next/middleware';
import nextI18next from './i18n';

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  server.use(compression());
  server.use(nextI18NextMiddleware(nextI18next));

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
})();
