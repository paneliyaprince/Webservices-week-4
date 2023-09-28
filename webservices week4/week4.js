const https = require('https');
const fs = require('fs');
const express = require('express');
const startUp = require('./routes/startup');
const getDevice = require('./routes/getDevice');
const getIp = require('./routes/getIp');
const alive = require('./routes/alive');
const getUser = require('./routes/getUser');

const port = 8080;
const httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
};

const app = express();

// Use the HTTPS server instead of the HTTP server
const server = https.createServer(app, httpsOptions);

// Use the express.json() middleware to parse the incoming request body
app.use(express.json());

// Include the routes
app.use('/', startUp);
app.use('/get-device', getDevice);
app.use('/get-ip', getIp);
app.use('/alive', alive);
app.use('/get-user', getUser);

// Start the HTTPS server
server.listen(port, () => {
  console.log('HTTPS is running on port ' + port + '');
});
