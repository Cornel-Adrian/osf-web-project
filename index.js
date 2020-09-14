const app = require('express')();
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");

require('./routes')(app);
require('dotenv').config()

const PORT = process.env.PORT || 3000;
const SENTRYDSN = process.env.SENTRYDSN;

Sentry.init({
  dsn: SENTRYDSN,
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  op: "test",
  name: "My First Test Transaction",
});

setTimeout(() => {
  try {
    // foo();
    app.listen(PORT, () => {
      console.log(`Our app is running on port ${PORT}`);
    });
  } catch (e) {
    Sentry.captureException(e);
  } finally {
    transaction.finish();
  }
}, 99);
module.exports = app;