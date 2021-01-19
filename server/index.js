/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const dbConnect = require('../database/dbConnect.js');
const controller = require('./controller.js');

// server setup
const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/../public`));

// open connection to database
dbConnect();

// return array of product objects that are similar to the specified product
app.get('/api/products/:productId', controller.getSimilarProducts);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
