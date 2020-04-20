const express = require('express');
const router = express.Router();

module.exports = ({
  createUser,
  getUserByEmail,
  getCourses,
  getSearchResults,
  createNewCourse,
  createNewHoles,
  logShots,
  logScore,
  getHoles,
  getHoleScores,
  getShots,
  getGames,
  getWeathers,
  newGame,
  game,
  getGamesForUserId,
  deleteGame
}) => {
  router.get('/courses', function (req, res, next) {
    getCourses()
      .then(data => res.send([data]))
      ;
  });

  router.get('/holes', function (req, res, next) {
    getHoles()
      .then(data => res.send([data]))
      ;
  });

  router.get('/holescores', function (req, res, next) {
    getHoleScores()
      .then(data => res.send([data]))
      ;
  });

  router.get('/shots', function (req, res, next) {
    getShots()
      .then(data => res.send([data]))
      ;
  });

  router.get('/games', function (req, res, next) {
    getGames()
      .then(data => res.send([data]))
      ;
  });

  router.get('/weathers', function (req, res, next) {
    getWeathers()
      .then(data => res.send([data]))
      ;
  });

  router.get('/courses/:keyword', function (req, res, next) {
    const keyword = req.params.keyword
    getSearchResults(keyword)
      .then(data => res.send([data]))
      .catch(e => console.log("Something went wrong. Please try a bit later."));
  });

  router.post('/signup', function (req, res, next) {
    console.log("req", req.body)
    getUserByEmail(req.body.email)
      .then(user => {
        console.log("HERE")
        if (!user.length) {
          console.log("HERE")
          return createUser(req.body)
            .then(data => {
              console.log('data0', data[0].id)
              req.session.user_id = data[0].id;
              req.session.email = data[0].email;
              res.send(req.session)
            })
        } else {
          res.send("signup failed!")
        }
      })
  });

  router.post('/signin', function (req, res, next) {
    getUserByEmail(req.body.email)
      .then(user => {
        if (user.length) {
          if (user[0].email === req.body.email) {
            req.session.user_id = user[0].id
            req.session.email = user[0].email
            res.send(req.session)
            return;
          }
        }
        console.log("signin failed!")
      })
  });

  router.get('/logout', function (req, res, next) {
    res.send(req.session = null);
  });

  router.post('/courses/new', async function (req, res, next) {
    createNewCourse(req.body)
      .then(data => res.send(data));
  });

  router.post('/courses/:id/holes/new', function (req, res, next) {
    createNewHoles(req.body)
      .then(data => res.send(data));
  });

  router.post('/shot', function (req, res, next) {
    logShots(req.body)
      .then(data => res.send(data))
  });

  router.post('/hole', function (req, res, next) {
    logScore(req.body)
      .then(data => res.send(data))
  });

  router.post('/newgame', function (req, res, next) {
    newGame(req.body)
      .then(data => res.send(data))
  });

  router.put('/game/:id', function (req, res, next) {
    game(req.body)
      .then(data => res.send(data))
  });

  router.get('/usergames', function (req, res, next) {
    getGamesForUserId(req.session.user_id)
      .then(data => res.send(data));
  });

  router.delete('/deletegame/:id', function (req, res, next) {
    deleteGame(req.params.id)
      .then(data => res.send(data))
  });


  return router
}