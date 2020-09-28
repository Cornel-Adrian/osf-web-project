module.exports = function (app, express, cookieParser) {
    const Sentry = require("@sentry/node");
    const SENTRYDSN = process.env.SENTRYDSN;
    const bodyParser = require('body-parser');
    const session = require('express-session');
    const MemoryStore = require('memorystore')(session)
    Sentry.init({
        dsn: SENTRYDSN,
        tracesSampleRate: 1.0,
    });
    app.set('trust proxy', 1);
    app.use(Sentry.Handlers.requestHandler());
    app.use(Sentry.Handlers.errorHandler());
    app.set('views', './views');
    app.set('view engine', 'ejs');
    app.use(express.static('public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cookieParser());
    app.use(session({
        secret: 'secret',
        saveUninitialized: true,
        store: new MemoryStore({
            checkPeriod: 86400000 // prune expired entries every 24h
        }),
        resave: false,
        cookie: {
            path: '/',
            secure: true,
            httpOnly: true
        }
    }))

    //Send information via cookies
    app.use((req, res, next) => {
        res.locals.user = req.cookies.user;
        return next();
    });

    // fallthrough error handler
    app.use(function onError(error, req, res, next) {
        // The error id is attached to `res.sentry` to be returned
        // and optionally displayed to the user for support
        res.render('error', { error: error });
        Sentry.captureException(e);
        res.end(res.sentry + '\n');
    });
}