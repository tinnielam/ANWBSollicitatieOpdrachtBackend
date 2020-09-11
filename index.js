//dependencies initialiseren
const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');

//Model & Route(s) ophalen 
const verkeersInformatieRoutes = require('./api/anwb/routes/verkeersInformatie');
const Verkeersinformatie = require('./api/anwb/model/verkeersInformatie');

app.use('/verkeersInformatie', verkeersInformatieRoutes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//MongoDB en dependencies initialiseren
const mongoose = require('mongoose');
const uriUtil = require('mongodb-uri');
const mongodbUri = 'mongodb+srv://tinnielam:Dranzer15#$@anwbsollicitatieopdrach.njwpf.azure.mongodb.net/ANWB?retryWrites=true&w=majority';
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true };

//Server draaien + database checken.
const port = 3000;
app.listen(port, () => {
  console.log(`Local server is up and running on port: ${port}/`);
});

//verbinding maken met MongoDB
mongoose.connect(mongooseUri, dbOptions, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Mongo up and running")
  }
});

// fetch data initialiseren
const fetch = require('node-fetch');
const url = "https://api.anwb.nl/v1/incidents?apikey=QYUEE3fEcFD7SGMJ6E7QBCMzdQGqRkAi&polylines=true&polylineBounds=true&totals=true";
let jsonData;

// Data fetchen en pushen naar de DB
fetch(url)
  .then(res => res.json())
  .then(data => jsonData = data)
  .then(() => Verkeersinformatie.insertMany(jsonData, function(err,r) {
    if(err){
      console.log(error);
    } else {
      console.log("Verkeersfeed is naar de collection gepushed " + new Date());
    }
})); 