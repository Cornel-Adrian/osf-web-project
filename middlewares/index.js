module.exports = function (app, express) {
    const Sentry = require("@sentry/node");
    const SENTRYDSN = process.env.SENTRYDSN;
    const bodyParser = require('body-parser');
    const session = require('express-session');

    app.use(Sentry.Handlers.requestHandler());
    app.use(Sentry.Handlers.errorHandler());
    app.set('view engine', 'ejs');
    app.use(express.static('public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(session({
        secret: 'secret-key',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 600000
        }
    }));
    app.use(express.json());

    app.use((req, res, next)=> {
        res.locals.user = req.session.user;
        next();
      });

    Sentry.init({
        dsn: SENTRYDSN,
        tracesSampleRate: 1.0,
    });

}