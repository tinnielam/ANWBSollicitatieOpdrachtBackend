const fetch = require('node-fetch');
const nodeAgenda = require('agenda');
const mongo = require('./mongoServer');
const anwbApi = "https://api.anwb.nl/v1/incidents?apikey=QYUEE3fEcFD7SGMJ6E7QBCMzdQGqRkAi&polylines=true&polylineBounds=true&totals=true";
const VerkeersinformatieJams = require('./api/anwb/model/verkeersinformatieJams');
const VerkeersinformatieRoadworks = require('./api/anwb/model/verkeersinformatieRoadworks');
const VerkeersinformatieJamsController = require('./api/anwb/controller/verkeersinformatieJamsController');
const VerkeersinformatieRoadworksController = require('./api/anwb/controller/verkeersinformatieRoadworksController');
const VerkeersinformatieRadarsController = require('./api/anwb/controller/verkeersinformatieRadarsController');

const agenda = new nodeAgenda({ db: { address: mongo.serverUri }, processEvery: '5 seconds' });
agenda.define('Sync ANWB feed every minute', async job => {
  await fetch(anwbApi)
    .then(res => res.json())
    .then(data => (anwbJsonData = data))
    .then(() => VerkeersinformatieJamsController())
    .then(() => VerkeersinformatieRoadworksController())
    .then(() => VerkeersinformatieRadarsController())
});

(async function() {
  await agenda.start();
  await agenda.every('one minute', 'Sync ANWB feed every minute');
})();

