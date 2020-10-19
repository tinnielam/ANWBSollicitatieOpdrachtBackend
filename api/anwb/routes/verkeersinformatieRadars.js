const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");
const VerkeersinformatieRadars = require('../model/verkeersinformatieRadars');
const anwbApi = "https://api.anwb.nl/v1/incidents?apikey=QYUEE3fEcFD7SGMJ6E7QBCMzdQGqRkAi&polylines=true&polylineBounds=true&totals=true";
let anwbJsonData;

router.get("/", (req, res, next) => {
  getActueleRadarsIdFromAnwbApi()
  getAllVerkeersinformatieRadars(res);
});

function getAllVerkeersinformatieRadars(res) {
  VerkeersinformatieRadars.find({
    "segments.radars.id": { $in: anwbJsonData.flat().flat() }
  }, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      console.log("VerkeersinformatieRadars succesvol opgehaald");
      res.send(result);
    }
  })
}

async function getActueleRadarsIdFromAnwbApi() {
  anwbJsonData = await fetch(anwbApi)
    .then(res => res.json())
    .then(data => (anwbJsonData = data))
    .then(() => anwbJsonData.roads.map(roads =>
      roads.segments
        .filter(segments => typeof segments.radars !== "undefined")
        .map(segments => segments.radars.map(function(radars) {
          return radars.id;
        }
        ))
    ))
}

getActueleRadarsIdFromAnwbApi()
module.exports = router;
