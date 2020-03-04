const express = require('express');
const next = require('next');

const session = require('express-session');
// take the port, make sure you're in base 10, or default to 3000
const port = parseInt(process.env.PORT, 10) || 3000;
// dev is the value of process.env.NODE_ENV not being in production mode
const dev = process.env.NODE_ENV !== 'production';
// if we are in dev mode, as in dev has the value 'true', meaning that NODE_ENV is NOT in production mode
// ... then we make nextApp = next({dev}), which evaluates to either true or false!
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

//===== SESSION STORAGE VIA SEQULIZESTORE =====//
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const User = require('./model.js').User;
const sequelize = require('./model.js').sequelize;

const sessionStore = new SequelizeStore({
  db: sequelize
});

nextApp.prepare().then(() => {
  const server = express();

  server.use(
    session({
      secret: 'djklafjladkfjlii123123', //random string here
      resave: false,
      saveUninitialized: true,
      name: 'safebnb',
      cookie: {
        secure: false, // very important when on localhost
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days, where a day is 24 hours
      },
      store: sessionStore
    })
  );
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;

    console.log(`> Ready on http://localhost:${port}`);
  });
});

// for first time runs in development, uncomment line below.
sessionStore.sync();
