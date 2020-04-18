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
    .then(res => res.rows)
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

const createNewCourse = function ({ courseName, postalCode, phoneNumber, website, isSponsored }) {

  const values = [
    `${courseName}`,
    `${postalCode}`,
    `${website}`,
    `${phoneNumber}`,
    `${isSponsored}`
  ]

  const query = `
  INSERT INTO golf_courses (name, postal_code, website_url, phone_number, sponsor)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *
  ;
  `

  return pool.query(query, values)
    .then(res => res.rows)
};
exports.createNewCourse = createNewCourse;

const createNewHoles = function (holeArray) {

  const placeholders = holeArray.map((hole, index) => `($${index * 4 + 1}, $${index * 4 + 2}, $${index * 4 + 3}, $${index * 4 + 4})`).join(',')

  const values = holeArray.reduce((result, current) => result.concat([current.number, current.par, current.yard, current.golfCourseId]), []);

  const query = `
  INSERT INTO holes (number, par, yard, golf_course_id) VALUES
  ${placeholders}
  ;
  `

  return pool.query(query, values)
    .then(res => res.rows)
};
exports.createNewHoles = createNewHoles;

const logShots = function ({ hole_score_id, club, comment }) {

  const values = [
    `${hole_score_id}`,
    `${club}`,
    `${comment}`
  ]

  const query = `
  INSERT INTO shots (hole_score_id, club, comment)
  VALUES ($1, $2, $3)
  RETURNING *
  ;
  `

  return pool.query(query, values)
    .then(res => res.rows)
};
exports.logShots = logShots;

const createUser = function ({ first_name, last_name, email, password }) {
  const values = [
    `${first_name}`,
    `${last_name}`,
    `${email}`,
    `${password}`
  ]

  const query = `
  INSERT INTO users (first_name, last_name, email, password)
  VALUES ($1, $2, $3, $4)
  RETURNING *
  ;
  `

  return pool.query(query, values)
    .then(res => res.rows)
};
exports.createUser = createUser;

const logScore = function ({ score/*, weather_id, start_time, end_time, user_id, game_id, hole_id*/ }) {

  const values = [
    `${score}`/*,
    `${weather_id}`,
    `${start_time}`,
    `${end_time}`,
    `${user_id}`,
    `${game_id}`,
    `${hole_id}`*/
  ]

  const query = `
  INSERT INTO hole_scores (score)
  VALUES ($1)
  RETURNING *
  ;
  `

  return pool.query(query, values)
    .then(res => res.rows)
};
exports.logScore = logScore;

const getUserByEmail = function (email) {
  const query = `
    SELECT *
    FROM users
    WHERE email = $1
    ;
  `

  const values = [
    `${email}`
  ];

  return pool.query(query, values)
    .then(res => res.rows)
};
exports.getUserByEmail = getUserByEmail;

const getUserById = function (id) {
  const query = `
    SELECT *
    FROM users
    WHERE id = $1
    ;
  `

  const values = [
    `${id}`
  ];

  return pool.query(query, values)
    .then(res => res.rows)
};
exports.getUserById = getUserById;

const getHoles = function () {
  const query = `
    SELECT *
    FROM holes
  `
  return pool.query(query)
    .then(res => res.rows)
};
exports.getHoles = getHoles;

const getHoleScores = function () {
  const query = `
    SELECT *
    FROM hole_scores
  `
  return pool.query(query)
    .then(res => res.rows)
};
exports.getHoleScores = getHoleScores;

const getShots = function () {
  const query = `
    SELECT *
    FROM shots
  `
  return pool.query(query)
    .then(res => res.rows)
};
exports.getShots = getShots;

const getGames = function () {
  const query = `
    SELECT *
    FROM games
  `
  return pool.query(query)
    .then(res => res.rows)
};
exports.getGames = getGames;

const getWeathers = function () {
  const query = `
    SELECT *
    FROM weathers
  `
  return pool.query(query)
    .then(res => res.rows)
};
exports.getWeathers = getWeathers;