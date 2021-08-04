require('dotenv').config();
const express = require('express');
const app = express();
var server = require('http').createServer(app);
app.use(express.static('public'));

var port = 3039;


app.get('/', function(req, res) {  
    res.sendFile(__dirname + '/index1.html');
});


server.listen(process.env.PORT || port, () =>
  console.log('Example app listening on port '+port+'!'),
);