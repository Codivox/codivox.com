const serverless = require("serverless-http")
const helmet = require("helmet")
const axios = require("axios")
const bodyParser = require("body-parser")
const express = require('express');
const app = express()
app.use(helmet())
app.use(bodyParser.json())
app.post("/.netlify/functions/email", async (req, res, next) => {

  const {email,fullName,phoneNumber,call,e_mail,either,text,} = JSON.parse(req.body)
  try {
    await axios.post(process.env.GATSBY_SLACK_URL, {
      "text": "New Message",
      "blocks": [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": `from ### ${fullName} with contact details: \n
            ${phoneNumber ? ":iphone: " + phoneNumber : ""} and :email: ${email} \n
            would prefer contact via ${!either && call ? ":iphone:" : ":email:"} \n
            and is interested in : \n
            *${text}*`
          }
        }
      ]
    })
    return res.status(201).json({
      success: true,
      message: "Thanks for contacting us, you will be hearing from us soon."
    })
  } catch (err) {
    res.status(500).json({
      message: "There have been an error. Please try again later."
    });
  }
})
module.exports.handler = serverless(app)

