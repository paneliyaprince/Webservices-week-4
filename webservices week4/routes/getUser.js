const express = require('express');

const getUser = express.Router();

// Use the express.json() middleware to parse the incoming request body
getUser.use(express.json());

// Handle POST requests to /getUser
getUser.post('/', (req, res) => {
  // Get the payload from the request body
  const payload = req.body;

  // Create a response object
  const response = {};

  // Iterate over the payload and copy each key-value pair to the response object
  for (const key in payload) {
    response[key] = payload[key];
  }

  // Send the response back to the client
  res.send(response);
});

module.exports = getUser;




