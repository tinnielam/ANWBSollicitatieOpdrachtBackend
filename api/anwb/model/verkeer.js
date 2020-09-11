'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VerkeerSchema = new Schema({
  roads: {type: String, required: true},
  copyright: {type: String, required: true}
})

module.exports = mongoose.model('Verkeer', VerkeerSchema);