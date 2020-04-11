const express = require('express');
const router = express.Router();

/* GET home page. */
module.exports = ({ getCourses, getSearchResults }) => {
  router.get('/courses', function(req, res, next) {
    getCourses()
    .then( data => res.send([data]))
    ;
  });

  router.get('/courses/:keyword', function(req, res, next) {
    const keyword = req.params.keyword
    getSearchResults(keyword)
    .then( data => res.send([data]))
    .catch( e => console.log("Something went wrong. Please try a bit later."));
  });

  router.get('/postal', function(req, res, next) {
    getCourses()
    .then( data => res.send([data]))
    ;
  });

  router.get('/postal/:postalCode', function(req, res, next) {
    const postalCode = req.params.postalCode
    console.log(req.params)
    postalCodeExists(postalCode)
    .then( data => res.send([data]))
    .catch( e => console.log("Something went wrong. Please try a bit later."));
  });

  return router
}

// module.exports = ({ getUserById , getAppCredentialsbyViewerId, getAppCredentialsbyOwnerId, getAllCategories }) => {
//   router.get("/sidebar", (req, res) => {
//     const id = req.session.user_id;
//     Promise.all([ getAppCredentialsbyOwnerId(id), getAppCredentialsbyViewerId(id)])
//     .then(userAppCredentialsList => res.send(userAppCredentialsList)).catch(e => console.log("API couldnt get sidebar info"));
//   });
//   router.get("/categories", (req, res) => {
//     getAllCategories()
//     .then( query => res.send(query)).catch(e => console.log("API couldnt get categories info"));
//   })
//   router.get("/header", (req, res) => {
//     const id = req.session.user_id || 0;
//     getUserById(id)
//     .then(user => res.send(user));
//   });

//   return router;
// };

// module.exports = router;
