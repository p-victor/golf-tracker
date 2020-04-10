const { Pool } = require('pg');
const pool = new Pool(require('../lib/db.js'));

pool.connect();

const getAppCredentialbyViewerEmail = function (viewerEmail) {
  const query = `
    SELECT *
    FROM users
    JOIN shared_access
    ON users.id = shared_access.user_id
    JOIN app_credentials
    ON app_credentials.id = shared_access.credential_id
    WHERE shared_access.user_id = $1
  ;
`;
  const values = [
    `${viewerEmail}`
  ];
  return pool.query(query, values)
    .then(res => {
      logQueries ? console.log(res.rows) : null;
      return res.rows
    });

};
exports.getAppCredentialbyViewerEmail = getAppCredentialbyViewerEmail;

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
