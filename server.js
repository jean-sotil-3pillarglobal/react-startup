/* eslint no-console: 0 */
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const landing = JSON.parse(fs.readFileSync('./data/landing.json'));

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  if (landing) {
    setTimeout(() => res.json(landing), Math.floor(Math.random() * 5000));
  } else {
    console.log(404, req.params.id);
    res.status(404).json({ error: 'user not found' });
  }
});

console.log(`Starting server on port 3000`);
app.listen(3000);
