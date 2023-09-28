const express = require('express');

const getDevice = express.Router();

getDevice.get('/', (req, res) => {
  const userAgent = req.headers['user-agent'];

  let isWindows = false;
  let isMac = false;
  let postmanRunTime = false;
  let isLinux = false;

  if (userAgent.includes('Windows')) {
    isWindows = true;
  } else if (userAgent.includes('Mac')) {
    isMac = true;
  } else if (userAgent.includes('Postman')) {
    postmanRunTime = true;
  } else {
    isLinux = true;
  }

  res.send({ isWindows, isMac, postmanRunTime, isLinux });
});

module.exports = getDevice;



