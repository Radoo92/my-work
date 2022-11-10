'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { response } = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  if (req.query.input !== undefined) {
    res.json(
      {
        "received": parseInt(req.query.input),
        "result": parseInt(req.query.input) * 2
      }
    );
  }
  else {
    res.json({
      "error": "Please provide an input!"
    });

  };
});

app.get('/greeter', (req, res) => {

  const name = req.query.name;
  const title = req.query.title;

  if (name === undefined && title === undefined) {
    res.status(400).json({ "error": "Please provide a name and a title!" });
    return
  };

  if (title === undefined) {
    res.status(400).json({ "error": "Please provide a title!" });
    return
  };

  if (name === undefined) {
    res.status(400).json({ "error": "Please provide a name!" });
    return
  };

  res.json(
    { "welcome_message": `Oh, hi there ${name}, my dear ${title}!` });
  return
});

app.listen(3000, () => {
  console.log(`The server is up and running on ${PORT}`);
});

app.get('/appenda/:appendable', (req, res) => {
  const append = req.params["appendable"]
  res.status(200).send({ appended: append + "a" })
  console.log(append);
});

app.post('/dountil/sum', (req, res) => {
  const until = req.body.until
  if (until === undefined) {
    res.status(400).json({ "error": "Please provide a number!" });
    return
  }
  let sum = 0;
  for (let i = 1; i <= until; i++) {
    sum += i;
  }
  res.send({ result: sum })
});

app.post('/dountil/factor', (req, res) => {
  const until = req.body.until
  if (until === undefined) {
    res.status(400).json({ "error": "Please provide a number!" });
    return
  }
  let factor = 1;
  for (let i = 1; i <= until; i++) {
    factor *= i;
  }
  res.send({ result: factor })
});

app.post('/arrays', (req, res) => {
  const { what, numbers } = req.body;
  console.log(req.body);
  switch (what) {
    case "sum": {
      let sum = 0;
      for (let i = 0; i <= numbers.length; i++) {
        console.log(numbers[i]);
        sum += numbers[i];
        console.log(sum);
      }
      console.log(sum);
      res.send({ result: sum })
      return
    }
    case "multiply": { return }
    case "double": { return }
  }
}); 