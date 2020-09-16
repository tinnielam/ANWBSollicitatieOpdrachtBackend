const express = require('express');
const router = express.Router();
const Verkeersinformatie = require('../model/verkeersinformatie');

router.get("/", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  getAllVerkeersinformatie(res);
});

function getAllVerkeersinformatie(res) {
  Verkeersinformatie.find({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      console.log("Verkeersinformatie succesvol opgehaald");
      res.send(result);
    }
  });
}

module.exports = router;
