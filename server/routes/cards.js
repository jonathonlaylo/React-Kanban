/*jshint esversion: 6 */
const express = require('express');
const server = require('../server');
const app =  express();
const router = express.Router();

router.route('/api/kanban/todo')
  .get((req, res) => {

  })
  .post((req, res) => {

  });

router.route('/new')
  .post((req, res) => {

  });


module.exports = router;