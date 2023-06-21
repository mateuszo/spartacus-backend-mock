const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const responses = require("./responses.json");

app.use(cors());

app.all("*", (req, res) => {
  res.type("json");
  res.send(responses[req.originalUrl].body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
