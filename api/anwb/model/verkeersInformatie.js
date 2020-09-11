const mongoose = require('mongoose');
const verkeerInformatieSchema = mongoose.Schema({
    copyright: { type: String },
    dateTime: {type: Date},
    roads: {type: Array}
})

module.exports = mongoose.model('VerkeersInformatie', verkeerInformatieSchema);