module.exports = function (app, express) {
    const Sentry = require("@sentry/node");
    const SENTRYDSN = process.env.SENTRYDSN;

    app.use(Sentry.Handlers.requestHandler());
    app.use(Sentry.Handlers.errorHandler());
    app.set('view engine', 'ejs');
    app.use('/static', express.static('public'));
    app.use(express.json());

    Sentry.init({
        dsn: SENTRYDSN,
        tracesSampleRate: 1.0,
    });
    
}