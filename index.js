const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('./FetchJasonFromAnwb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/anwb', (request, response) => {  
   response.json(fetch.hoi);
});

//Server draaien + database checken.
const port = 3000;
const server = app.listen(port, () => {
  console.log(`Local server is up and running on port: ${port}/`);
});
