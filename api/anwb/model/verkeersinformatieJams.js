const mongoose = require('mongoose');
const verkeerinformatieSchemaJams = mongoose.Schema({
  segments: [{
    start: { type: String },
    end: { type: String },
    jams: [{
      id: { type: Number},
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
    }]
  }]
});

module.exports = mongoose.model('VerkeersinformatieJams', verkeerinformatieSchemaJams);