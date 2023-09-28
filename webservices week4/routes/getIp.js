const express  = require("express");
const getIp = express.Router();
getIp.get('/', (req, res) => {
    const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    res.send({userIp});
});
module.exports = getIp;



