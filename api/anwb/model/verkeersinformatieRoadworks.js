const mongoose = require('mongoose');
const verkeerinformatieSchemaRoadworks = mongoose.Schema({
  segments: [{
    start: { type: String },
    end: { type: String },
    roadworks: [{
      id: { type: Number, sparse: true },
      road: { type: String },
      type: { type: String },
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
    }]
  }]
});

module.exports = mongoose.model('VerkeersinformatieRoadworks', verkeerinformatieSchemaRoadworks);