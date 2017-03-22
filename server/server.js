/*jshint esversion: 6 */
const express = require('express');
const app = express();
const bp = require('body-parser');
const db = require('./models');

const cardsroute = require('./routes/cards.js');

app.use(bp.urlencoded({ extended: true }));

app.use('/api/kanban/todo', cardsroute);

app.get('/', (req, res) => {
  res.send('sanity test');
});

app.listen(8080, (req, res) => {
  console.log('server started');
});

module.exports = app;