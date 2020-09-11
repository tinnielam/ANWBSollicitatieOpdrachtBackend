// fetch dependency en data initialiseren
let anwbJsonData;
const fetch = require('node-fetch');
const Agenda = require('agenda');
const url = "https://api.anwb.nl/v1/incidents?apikey=QYUEE3fEcFD7SGMJ6E7QBCMzdQGqRkAi&polylines=true&polylineBounds=true&totals=true";
const mongo = require('./mongoServer');
const Verkeersinformatie = require('./api/anwb/model/verkeersInformatie');

// nieuw Agenda object maken om light jobs uit te voeren.
const agenda = new Agenda({ db: { address: mongo.serverUri }, processEvery: '5 seconds' });
// Data fetchen en vervolgens naar de MongoDB ANWB Collection sturen.
agenda.define('Sync ANWB feed every 5 minutes', async job => {  
  await fetch(url)
    .then(res => res.json())
    .then(data => anwbJsonData = data)
    .then(() => Verkeersinformatie.insertMany(anwbJsonData, function(err, r) {
      if (err) {
        console.log(error);
      } else {
        console.log("Verkeersfeed is naar de collection gepushed " + new Date());
      }
    }));
});

// Magie om de lite jobs uit te voeren.
(async function() {
  await agenda.start();
  await agenda.every('5 minutes', 'Sync ANWB feed every 5 minutes');
})();
