module.exports = function (app, express, cookieParser) {
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
    app.use(express.json());
    app.use(cookieParser());
    app.use(session({
        secret:'secret',
        cookie:{ maxAge: 60000},
        saveUninitialized: false,
        resave: true
    }))

    Sentry.init({
        dsn: SENTRYDSN,
        tracesSampleRate: 1.0,
    });

    app.use((req, res, next) => {
        res.locals.user = req.cookies.user;
        next();
    });
}