/* eslint no-console: 0 */
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const smtpTransport = require('nodemailer-smtp-transport');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mailer = ({ email, name, text }) => {
  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'jean.sotil@gmail.com',
      pass: 'oshan2000'
    }
  }));

  const from = name && email ? `${name} <${email}>` : `${name || email}`;

  const message = {
    from,
    to: 'jean.sotil@gmail.com',
    subject: 'Testing',
    text,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
};

app.get('*', (req, res) => {
  res.send('Server is working. Please post at "/contact" to submit a message.')
})

app.post('/contact', (req, res) => {
  const { email = '' } = req.body;

  mailer({ email, name: '', text: '' }).then(() => {
    console.log(`Sent the message ${email}.`);
    res.redirect('/#success');
  }).catch((error) => {
    console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${error && error.message}`);
    res.redirect('/#error');
  })
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
