const express = require("express");
const db = require("./models");

const app = express();
const port = 6000;

app.get("/", (req, res) => {
  res.send("Titanic Engine running!");
});

app.get("/people", (req, res) => {
  res.send("Titanic Engine running!");
});

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
