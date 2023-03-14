const path = require('path');
const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
// const { db } = require("./database");

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const app = express();
// db();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use('/api/comments', require("./routes/comments"));
app.use('/api/employments', require("./routes/employments"));
app.use('/api/portfolio', require("./routes/portfolio"));
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
