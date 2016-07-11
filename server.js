'use strict';
const express = require('express');

const PORT = 8080;

const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

var server = app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

module.exports = server; 