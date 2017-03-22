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
      res.json({cardsList:{cards}});
    });
  })
  .post((req, res) => {
    Card.create({
      Title: req.body.title,
      Priority: req.body.priority,
      Status: req.body.status
    })
    .then((task) => {
      res.send();
    });
  });

router.route('/:id')
  .put((req, res) => {
    console.log(req.body);
    Card.findById(req.params.id)
    .then((task) => {
      if(task) {
        console.log('task', task);
        task.update({
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