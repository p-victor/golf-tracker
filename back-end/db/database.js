const { Pool } = require('pg');
const pool = new Pool(require('../lib/db.js'));

pool.connect();

const getCourses = function () {
  const query = `
    SELECT *
    FROM golf_courses
    ORDER BY sponsor DESC
  `
  return pool.query(query)
    .then(res => {
      if (!res.rows) {
        return [{ results: "An error occurs" }]
      } else {
        return res.rows
      }
    })
};
exports.getCourses = getCourses;

const getSearchResults = function (nameOrPostalCode) {
  const query = `
    SELECT *
    FROM golf_courses
    WHERE postal_code iLIKE $1
    OR name iLIKE $1
    ORDER BY sponsor DESC
  `
  return pool.query(query, [`%${nameOrPostalCode}%`])
    .then(res => {
      if (!res.rows[0]) {
        return [{ results: "No match found" }]
      } else {
        return res.rows
      }
    })
};
exports.getSearchResults = getSearchResults;

const postalCodeExists = function (postalCode) {
  let noSpaces = postalCode.split(" ").join("")
  const query = `
    SELECT *
    FROM golf_courses
    WHERE postal_code iLIKE $1
  `
  return pool.query(query, [`%${noSpaces}%`])
    .then(res => {
      if (!res.rows[0]) {
        return [{}];
      } else {
        return res.rows
      }
    })
};

exports.postalCodeExists = postalCodeExists;



/* const getAppCredentialForUser = function (userId) {
  const query = `

  ;
`;
const values = [
  `${}`,
  `${}`,
  `${}`,
   `${}`
  ];
return pool.query(query, values)
.then(res => {
  logQueries  ? console.log(res.rows) : null;
  return res.rows});
};
exports.getAppCredentialForUser = getAppCredentialForUSer; */

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


/* * * * * * * * * * * * *  DO NOT DELETE  * * * * * * * * * * */

// the following is the inner-template for adding more database fetching functions in the future

/*
  const query = `

    ;
  `;
const values = [
  `${}`,
  `${}`,
  `${}`,
   `${}`
  ];
return pool.query(query, values)
.then(res => {
  logQueries  ? console.log(res.rows) : null;
  return res.rows});
*/
