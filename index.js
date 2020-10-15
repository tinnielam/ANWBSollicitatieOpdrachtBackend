//dependencies initialiseren
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetchData = require('./anwbData');
const mongo = require('./mongoServer');

const verkeersinformatieJams = require('./api/anwb/routes/verkeersinformatieJams');
const verkeersinformatieRadars = require('./api/anwb/routes/verkeersinformatieRadars');
const verkeersinformatieRoadworks = require('./api/anwb/routes/verkeersinformatieRoadworks');

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/verkeersinformatieJams', verkeersinformatieJams)
app.use('/verkeersinformatieRadars', verkeersinformatieRadars)
app.use('/verkeersinformatieRoadworks', verkeersinformatieRoadworks)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;
app.listen(port, () => {
  console.log(`Local server is up and running on port: ${port}/`);
});