const https = require('http');
const fs = require('fs');
const express = require('express');
const startUp = require('./routes/startup');

const port = 8080
// const httpsOptions = {
//     key: fs.readFileSync('./key.pem'),
//     cert: fs.readFileSync('./cert.pem')
// }

app = express();

const server = https.createServer(app);

app.use(express.json());
app.use('/', startUp)

app.get('/get-device', (req, res) => {
    const userAgent = req.headers['user-agent'];
    
    if (userAgent.includes('Windows')) {
        res.send('You are using Windows');    
    }else if (userAgent.includes('Mac')) {
        res.send('You are using Mac');
    }else if (userAgent.includes('Postman')) {
        res.send('You are using Postman');
    }
    else{
        res.send({userAgent});
    }
        
    
})

app.get('/get-ip', (req, res) => {
    const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    res.send({userIp});
    
        
    
})

server.listen(port, () => {
    console.log('HTTPS is running on port ' + port + '')
});