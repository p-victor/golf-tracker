const express = require('express');
const router = express.Router();

/* GET home page. */
module.exports = ({ getCourses, getSearchResults, createNewCourse, createNewHoles }) => {
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
  
  router.post('/courses/new', async function (req, res, next) {
    createNewCourse(req.body)
    .then(data => res.send(data));
  });

  router.post('/courses/:id/holes/new', function (req, res, next) {
    console.log(req.body);
    createNewHoles(req.body)
    .then(data => res.send(data));
  });



  return router
}