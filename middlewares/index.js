module.exports = function (app) {

    app.use(Sentry.Handlers.errorHandler());
}