const express = require('express');
const router = express.Router();
const VerkeersinformatieRoadworks = require('../model/verkeersinformatieRoadworks');

router.get("/", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  getAllVerkeersinformatie(res);
});

function getAllVerkeersinformatie(res) {
  VerkeersinformatieRoadworks.find({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      console.log("VerkeersinformatieRoadworks succesvol opgehaald");
      res.send(result);
    }
  }).sort({'date': -1}).limit(5);
}

module.exports = router;
