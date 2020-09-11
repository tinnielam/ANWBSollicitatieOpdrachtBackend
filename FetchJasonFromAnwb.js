
const fetch = require('node-fetch');
const url = "https://api.anwb.nl/v1/incidents?apikey=QYUEE3fEcFD7SGMJ6E7QBCMzdQGqRkAi&polylines=true&polylineBounds=true&totals=true";
let jsonData;

//MongoDB en dependencies initialiseren
const mongoose = require('mongoose');
const uriUtil = require('mongodb-uri');
const mongodbUri = 'mongodb+srv://tinnielam:Dranzer15#$@anwbsollicitatieopdrach.njwpf.azure.mongodb.net/ANWB?retryWrites=true&w=majority';
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const dbOptions = { useNewUrlParser: true };
//const verkeerModel = require('./api/anwb/model/verkeer');

//verbinding maken met MongoDB
mongoose.connect(mongooseUri, dbOptions, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("mongo up and running")
  }
});

const ANWB = mongoose.model('ANWB', { 
    copyright: { type: String },
    dateTime: {type: Date},
    roads: {type: Array}
}); 

// Data ophalen van de ANWB API
fetch(url)
  .then(res => res.json())
  .then(data => jsonData = data)
  .then(() => ANWB.insertMany(jsonData, function(err,r) {
    exports.hoi = jsonData;
  mongoose.connection.close()
})); 

