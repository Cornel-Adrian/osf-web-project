module.exports = function (app, express) {
    const Sentry = require("@sentry/node");
    const SENTRYDSN = process.env.SENTRYDSN;
    const bodyParser = require('body-parser');

    app.use(Sentry.Handlers.requestHandler());
    app.use(Sentry.Handlers.errorHandler());
    app.set('view engine', 'ejs');
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.json());

    Sentry.init({
        dsn: SENTRYDSN,
        tracesSampleRate: 1.0,
    });
    
}