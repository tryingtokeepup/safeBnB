const express = require('express');
const next = require('next');

// take the port, make sure you're in base 10, or default to 3000
const port = parseInt(process.env.PORT, 10) || 3000;
// dev is the value of process.env.NODE_ENV not being in production mode
const dev = process.env.NODE_ENV !== 'production';
// if we are in dev mode, as in dev has the value 'true', meaning that NODE_ENV is NOT in production mode
// ... then we make nextApp = next({dev}), which evaluates to either true or false!
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;

    console.log(`> Ready on http://localhost:${port}`);
  });
});
