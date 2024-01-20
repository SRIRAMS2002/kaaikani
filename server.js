const { createServer } = require('http');
const { parse } = require('url');
const { createReadStream } = require('fs');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    // Serve static files directly
    if (pathname.startsWith('/_next') || pathname.startsWith('/static')) {
      const filePath = `./${pathname}`;
      createReadStream(filePath).pipe(res);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
