/*jshint esversion: 6 */
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('sanity test');
});

app.listen(3000, (req, res) => {
  console.log('server started');
});