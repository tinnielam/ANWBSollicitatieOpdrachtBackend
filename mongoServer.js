//MongoDB en dependencies initialiseren
const mongoose = require('mongoose');
const uriUtil = require('mongodb-uri');
const mongodbUri = 'mongodb+srv://tinnielam:Dranzer15#$@anwbsollicitatieopdrach.njwpf.azure.mongodb.net/ANWB?retryWrites=true&w=majority';
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true };

//verbinding maken met MongoDB
mongoose.connect(mongooseUri, dbOptions, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Mongo up and running")
  }
});

exports.serverUri = mongooseUri