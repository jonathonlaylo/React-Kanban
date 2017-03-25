/*jshint esversion: 6 */
const express = require('express');
const app = express();
const bp = require('body-parser');
const db = require('./models');

const cardsroute = require('./routes/cards.js');

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

app.use('/api/kanban/todo', cardsroute);

app.get('/', (req, res) => {
  res.send('sanity test');
});

app.listen(8080, (req, res) => {
  console.log('server started');
  db.sequelize.sync();
});

module.exports = app;