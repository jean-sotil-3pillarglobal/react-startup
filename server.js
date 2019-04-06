/* eslint no-console: 0 */
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const users = fs.readFileSync('./data/users.json');
const usersObj = JSON.parse(users).users;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  if (usersObj) {
    setTimeout(() => res.json(usersObj), Math.floor(Math.random() * 5000));
  } else {
    console.log(404, req.params.id);
    res.status(404).json({ error: 'user not found' });
  }
});

app.get('/hub/:id', (req, res) => {
  const user = usersObj.results.find(item => item.uuid === req.params.id);
  if (user) {
    setTimeout(() => res.json(user), Math.floor(Math.random() * 5000));
  } else {
    console.log(404, req.params.id);
    res.status(404).json({ error: 'campaign not found' });
  }
});

console.log(`Starting server on port 3000`);
app.listen(3000);


