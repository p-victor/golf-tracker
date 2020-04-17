const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const logger = require('morgan');
var cookieSession = require('cookie-session');

const dbHelper = require('./db/database');

const apiRouter = require('./routes/api');

const app = express();

app.use(cookieSession({
  name: 'session',
  keys: ["user_id"],
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter(dbHelper));

module.exports = app;
