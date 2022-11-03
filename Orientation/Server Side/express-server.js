const express = require('express');
const path = require('path');
const app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/endpoint', function(req, res)
{
  res.send('Hello endpoint');
})

app.get('/assets/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'assets', 'style.css'));  
});

app.listen(3000);