const mongoose = require('mongoose');
const verkeerinformatieSchemaRadars = mongoose.Schema({
  segments: [{
    start: { type: String },
    end: { type: String },
    radars: [{
      id: { type: Number, sparse: true },
      road: { type: String },
      type: { type: String },
      category: { type: String },
      label: { type: String },
      incidentType: { type: String },
      from: { type: String },
      to: { type: String },
      fromLoc: { type: Object },
      loc: {type: Object},
      polyline: { type: String },
      toLoc: { type: Object },
      bounds: { type: Object },
      events: { type: Array },
      reason: { type: String },
      HM: {type: Number }
    }]
  }]
});

module.exports = mongoose.model('VerkeersinformatieRadars', verkeerinformatieSchemaRadars);