const mongoose = require('mongoose');
const verkeerInformatieSchema = mongoose.Schema({
  segments: [{
    start: { type: String },
    end: { type: String },
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
      reason: { type: String },
      distance: { type: Number },
      delay: { type: Number }
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
      reason: { type: String },
    }],
    radars: [{
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
      reason: { type: String },
    }]
  }]
});

module.exports = mongoose.model('VerkeersInformatie', verkeerInformatieSchema);