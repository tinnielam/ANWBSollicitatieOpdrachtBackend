const mongoose = require('mongoose');
const uriUtil = require('mongodb-uri');
const { decrypt } = require('./utils/crypto');
const mongoUriUser = {
  iv: 'b0b306ebf692fded97abda4f46540ffd',
  content: '854062463765ffc834d24f2ab212b5fd960ce24e56cf3b63be13cce41bb5c704352b65d158d135eda148eef64694608116c0dbe0a11a25cc4e4f7ce54a1446901c19bd9487e1afe45584b70623d4c3573f9f35f8946f6dec1e411a086da09bf647e85f361a6d4b0064caa5457de807b4171fda93e84e394c'
};

const mongodbUri = decrypt(mongoUriUser);
const mongooseUriFormat = uriUtil.formatMongoose(mongodbUri);
const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true };

mongoose.connect(mongooseUriFormat, dbOptions, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Mongo up and running")
  }
});

exports.serverUri = mongooseUriFormat;