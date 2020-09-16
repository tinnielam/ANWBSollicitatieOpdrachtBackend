//dependencies initialiseren
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetchData = require('./anwbData');
const mongo = require('./mongoServer');

//Model ophalen
const verkeersinformatieRoutes = require('./api/anwb/routes/verkeersinformatie');

app.use('/verkeersinformatie', verkeersinformatieRoutes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Server draaien + database checken.
const port = 3000;
app.listen(port, () => {
  console.log(`Local server is up and running on port: ${port}/`);
});