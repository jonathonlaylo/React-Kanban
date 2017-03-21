/*jshint esversion: 6 */
const express = require('express');
const app = express();
// const db = require('./models');

app.get('/', (req, res) => {
  res.send('sanity test');
});

app.listen(8080, (req, res) => {
  console.log('server started');
});

module.exports = app;