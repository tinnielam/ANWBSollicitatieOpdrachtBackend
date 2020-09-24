const express = require('express');
const router = express.Router();
const VerkeersinformatieJams = require('../model/verkeersinformatieJams');

router.get("/", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  getAllVerkeersinformatie(res);
});

function getAllVerkeersinformatie(res) {
  VerkeersinformatieJams.find({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      console.log("VerkeersinformatieJams succesvol opgehaald");
      res.send(result);
    }
  }).sort({'date': -1}).limit(5);
}

module.exports = router;
