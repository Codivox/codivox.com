const serverless = require('serverless-http');
const helmet = require('helmet');
const axios = require('axios');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
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
    console.log('try');
    await axios.post('https://hooks.slack.com/services/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', {
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
    res.status(500).json({
      message: 'Something went wrong! Please try again.',
    });
  }
});
module.exports.handler = serverless(app);
