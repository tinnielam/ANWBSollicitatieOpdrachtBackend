//dependencies initialiseren
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetchData = require('./fetchAnwbData');
const mongo = require('./mongoServer');

//Model ophalen
const verkeersInformatieRoutes = require('./api/anwb/routes/verkeersInformatie');

app.use('/verkeersInformatie', verkeersInformatieRoutes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Server draaien + database checken.
const port = 3000;
app.listen(port, () => {
  console.log(`Local server is up and running on port: ${port}/`);
});