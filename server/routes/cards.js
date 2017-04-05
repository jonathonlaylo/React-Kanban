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

router.route('/editcard')
  .put((req, res) => {
    // console.log(req.body);
    let cardID = req.body.id;
    Card.update({
      id: req.body.id,
      Title: req.body.Title,
      Priority: req.body.Priority,
      Status: req.body.Status
    },
      {
        where: {
          id: cardID
      }
    })
    .then(()=> {
      Card.findById(cardId)
        .then(card => {
          res.send(card);
        });
    })
    .catch(err => {
      res.send(err);
    });
  //   Card.findById(req.params._key)
  //   .then((task) => {
  //     if(task) {
  //       // console.log('task', task);
  //       task.update({
  //         _key: req.body._key,
  //         Title: req.body.title,
  //         Priority: req.body.priority,
  //         Status: req.body.status
  //       }).then((task) => {
  //         res.redirect(303, '/api/kanban/todo');
  //       });
  //     }
  //   });
  });

 router.route('/:_key')
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