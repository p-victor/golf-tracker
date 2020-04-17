const express = require('express');
const router = express.Router();

module.exports = ({ createUser, getUserByEmail, getCourses, getSearchResults, createNewCourse, createNewHoles, logShots }) => {
  router.get('/courses', function (req, res, next) {
    getCourses()
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
    console.log(req.body);
    createNewHoles(req.body)
      .then(data => res.send(data));
  });

  router.post('/shot', function (req, res, next) {
    console.log('shots:', req.body);

    logShots(req.body)
    .then(data => res.send(data))
  });

  router.post('/hole', function (req, res, next) {
    console.log('hole_scores:',req.body);

    logScore(req.body)
    .then(data => res.send(data))
  });


  return router
}