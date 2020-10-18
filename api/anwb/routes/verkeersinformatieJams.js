const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const VerkeersinformatieJams = require("../model/verkeersinformatieJams");
const anwbApi = "https://api.anwb.nl/v1/incidents?apikey=QYUEE3fEcFD7SGMJ6E7QBCMzdQGqRkAi&polylines=true&polylineBounds=true&totals=true";
let anwbJsonData;

router.get("/", (req, res, next) => {
  getAllVerkeersinformatieJams(res);
});

function getAllVerkeersinformatieJams(res) {
  VerkeersinformatieJams.find({
    "segments.jams.id": { $in: anwbJsonData.flat().flat() }
  }, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      console.log("VerkeersinformatieJams succesvol opgehaald");
      res.send(result);
    }
  })
}

async function getActueleJamsIdFromAnwbApi() {
  anwbJsonData = await fetch(anwbApi)
    .then(res => res.json())
    .then(data => (anwbJsonData = data))
    .then(() => anwbJsonData.roads.map(roads =>
      roads.segments
        .filter(segments => typeof segments.jams !== "undefined")
        .map(segments => segments.jams.map(function(jams) {
          return jams.id;
        }
        ))
    ))
}

getActueleJamsIdFromAnwbApi()
module.exports = router;
