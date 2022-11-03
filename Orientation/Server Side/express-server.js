const express = require('express');
const path = require('path');
const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/endpoint', function(req, res)
{
  res.send('Hello endpoint');
})

app.listen(3000);