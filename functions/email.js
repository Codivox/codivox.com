const serverless = require('serverless-http');
const helmet = require('helmet');
const axios = require('axios');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const Sentry = require('@sentry/node');

const { SENTRY_DSN } = process.env;
let sentryInitialized = false;
(function () {
  if (SENTRY_DSN) {
    Sentry.init({ dsn: SENTRY_DSN });
    sentryInitialized = true;
  }
})();

async function reportError(error) {
  console.warn(error);
  if (!sentryInitialized) return;

  if (typeof error === 'string') {
    Sentry.captureMessage(error);
  } else {
    Sentry.captureException(error);
  }

  await Sentry.flush();
}

function catchErrors(handler) {
  return async function(event, context) {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
      return await handler.call(this, ...arguments);
    } catch(e) {
      await reportError(e);
      throw e;
    }
  };
}

app.use(helmet());
app.use(bodyParser.json());
app.post('/.netlify/functions/email', async (req, res, next) => {
  const {
    email,
    fullName,
    phoneNumber,
    preference,
    text,
  } = JSON.parse(req.body);
  try {
    await axios.post(process.env.GATSBY_SLACK_URL, {
      text: 'New Message',
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `from ### ${fullName} with contact details: \n
            ${
              phoneNumber ? ':iphone: ' + phoneNumber : ''
            } and :email: ${email} \n
            would prefer contact via ${preference} \n
            and is interested in : \n
            *${text}*`,
          },
        },
      ],
    });
    return res.status(201).json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (err) {
    Sentry.addBreadcrumb({
      category: "Contact Us",
      message: "Error submitting" + email + fullName + phoneNumber + preference + text,
      level: Sentry.Severity.Info,
    });
    res.status(500).json({
      message: 'Something went wrong! Please try again.',
    });
  }
});
module.exports.handler = catchErrors(serverless(app));
