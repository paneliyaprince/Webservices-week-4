const express = require('express');
const app = express();
const port = 8080;
const hostname = 'localhost';

app.get('/', (req, res) => {
    console.log(req, "request");
    res.json({info:"Node js", "message": " World!"});  
}

app.listen(port, () => {
    console.log(`Server running`);
}
