module.exports = function (app) {

    app.use(Sentry.Handlers.errorHandler());
    // app.set('views', path.join(__dirname, 'views'));
    // app.set('view engine', 'ejs');
}