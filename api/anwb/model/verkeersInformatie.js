const mongoose = require('mongoose');
const verkeerInformatieSchema = mongoose.Schema({
    roads: {type: Array},
    totals: {type: Object}
})

module.exports = mongoose.model('VerkeersInformatie', verkeerInformatieSchema);