/*jshint esversion: 6 */
const express = require('express');
const app =  express();
const router = express.Router();
const db = require('../models');
const { Card } = db;

router.route('/')
  .get((req, res) => {
    Card.findAll()
    .then( cards => {
      res.json(cards);
    });
  })
  .post((req, res) => {
    // console.log(req.body);
    Card.create({
      id: req.body.id,
      Title: req.body.Title,
      Priority: req.body.Priority,
      Status: req.body.Status
    })
    .then((task) => {
      res.send();
    });
  });

router.route('/edit')
  .put((req, res) => {
    // console.log(req.body);
    Card.update(req.params.id)
    .then((task) => {
      if(task) {
        // console.log('task', task);
        task.update({
          id: req.body.id,
          Title: req.body.title,
          Priority: req.body.priority,
          Status: req.body.status
        }).then((task) => {
          res.redirect(303, '/api/kanban/todo');
        });
      }
    });
  })
  .delete((req, res) => {
    Card.destroy({
      where: {
        id: req.params.id
      }
    }).then((task) => {
      res.redirect(303, '/api/kanban/todo');
    });
  });

module.exports = router;