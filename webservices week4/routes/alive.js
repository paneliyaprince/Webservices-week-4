const express  = require("express");
const alive = express.Router();
alive.get('/', (req, res) => {
    res.send({alive: true});
});
module.exports = alive;



