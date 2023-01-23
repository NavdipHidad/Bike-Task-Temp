const express = require('express');

const usersRouter = require('./routes/users.router');

const app = express();

app.use(express.json());
app.use('/user', usersRouter);

module.exports = app;