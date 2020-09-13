const mongoose = require('mongoose');
const verkeerInformatieSchema = mongoose.Schema({
  segments: [{ __V: {},
    jams: [{
      id: { type: Number, unique: true, sparse: true },
      road: { type: String },
      category: { type: String },
      label: { type: String },
      incidentType: { type: String },
      from: { type: String },
      to: { type: String },
      fromLoc: { type: Object },
      toLoc: { type: Object },
      polyline: { type: String },
      bounds: { type: Object },
      events: { type: Array },
      start: { type: Date },
      stop: { type: Date },
      reason: { type: String }
    }],
    roadworks: [{
      id: { type: Number, unique: true, sparse: true },
      road: { type: String },
      category: { type: String },
      label: { type: String },
      incidentType: { type: String },
      from: { type: String },
      to: { type: String },
      fromLoc: { type: Object },
      toLoc: { type: Object },
      bounds: { type: Object },
      events: { type: Array },
      start: { type: Date },
      stop: { type: Date },
      reason: { type: String }
    }]    
  }]
}, function(err, r) {
  if (err) {
    console.log(err);
  } else {
    console.log("VerkeersModel gelukt " + new Date());
  }
});

module.exports = mongoose.model('VerkeersInformatie', verkeerInformatieSchema);