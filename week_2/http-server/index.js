//when you save a change and want the server to autorestart use
// npm install nodemon and run npx nodemon index.js

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello Pari!');
});

app.get('/route', (req, res) => {
  res.json({
    "name": "aman",
    "id": "123"
  });
});

app.post('/', (req, res) => {
  console.log(req.body);
  console.log(req.headers);
  res.send({
    "msg": "how is the weather today!"
  });
});

app.listen(port, (err) => {
  if (err) {
    console.error("Error starting the server:", err);
  } else {
    console.log(`App is working on port ${port}`);
  }
});
