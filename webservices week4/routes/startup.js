const express = require('express');

const startUp = express.Router();

// Handle GET requests to /
startUp.get('/', (req, res) => {
  // Send the response "It Works!"
  res.send('It Works!');
});

module.exports = startUp;



