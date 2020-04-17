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