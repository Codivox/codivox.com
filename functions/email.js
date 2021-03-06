const serverless = require('serverless-http');
const helmet = require('helmet');
const axios = require('axios');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const Sentry = require('@sentry/node');

Sentry.init({ dsn: process.env.SENTRY_DSN });
app.use(Sentry.Handlers.errorHandler());

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
      message: "Error on form submission, data: " + err.config.data,
      level: Sentry.Severity.Info,
    });
    Sentry.captureException(err);
    res.status(500).json({
      message: 'Something went wrong! Please try again.',
    });
  }
});
module.exports.handler = serverless(app);
