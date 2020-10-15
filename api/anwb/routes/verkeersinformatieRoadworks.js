const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");
const VerkeersinformatieRoadworks = require('../model/verkeersinformatieRoadworks');
const anwbApi = "https://api.anwb.nl/v1/incidents?apikey=QYUEE3fEcFD7SGMJ6E7QBCMzdQGqRkAi&polylines=true&polylineBounds=true&totals=true";
let anwbJsonData;

router.get("/", (req, res, next) => {
  getAllVerkeersinformatie(res);
});

function getAllVerkeersinformatie(res) {
  VerkeersinformatieRoadworks.find({
    "segments.roadworks.id": { $in: anwbJsonData.flat().flat() }
  }, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      console.log("VerkeersinformatieRoadworks succesvol opgehaald");
      res.send(result);
    }
  })
}

async function getActueleRoadworksIdFromAnwbApi() {
  anwbJsonData = await fetch(anwbApi)
    .then(res => res.json())
    .then(data => (anwbJsonData = data))
    .then(() => anwbJsonData.roads.map(roads =>
      roads.segments
        .filter(segments => typeof segments.roadworks !== "undefined")
        .map(segments => segments.roadworks.map(function(roadworks) {
          return roadworks.id;
        }
        ))
    ))
}

getActueleRoadworksIdFromAnwbApi()
module.exports = router;
