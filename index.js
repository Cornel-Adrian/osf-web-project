const app = require('express')();
const Sentry = require("@sentry/node");
const PORT = process.env.PORT || 3000;
const SENTRYDSN = process.env.SENTRYDSN;

require('./routes')(app);
require('dotenv').config()


Sentry.init({
  dsn: SENTRYDSN,
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  op: "test",
  name: "My First Test Transaction",
});

app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});

app.set('view engine', 'ejs');

setTimeout(() => {
  try {
    // foo();
  } catch (e) {
    Sentry.captureException(e);
  } finally {
    transaction.finish();
  }
}, 99);
module.exports = app;