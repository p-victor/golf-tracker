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
  game
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
    getUserByEmail(req.body.email)
      .then(user => {
        console.log("HERE")
        if (!user.length) {
          console.log("HERE")
          return createUser(req.body)
        }
        res.send("signup failed!")
      })
  });

  router.post('/signin', function (req, res, next) {
    getUserByEmail(req.body.email)
      .then(user => {
        console.log(user)
        if (user.length) {
          if (user[0].email === req.body.email) {
            return req.session.user_id = user.id
          }
        }
        res.send("signin failed!")
      })
  });


  router.get('/logout', function (req, res, next) {
    req.session = null;
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


  return router
}