const express = require("express");
const morgan = require("morgan");
const db = require("./models");
const passengers = require("./models").passengers;

const app = express();
const port = 5000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Titanic Engine running!");
  });

app.get("/people", async (req, res) => {
  const offset = req.query.offset || 0
  const limit = req.query.limit || 30
  try{
    const ppl = await passengers.findAll({ offset, limit })
    res.json(ppl)
  }
  catch(err){
    console.log(err)
    res.status(500)
  }
});
app.get("/people/:id", async (req, res) => {
  const {id} = req.params
  try{
    const person = await passengers.findOne({ where: {id}})
    if(!person){
      res.status(404).end();
      return
    }
    res.json(person)
  }
  catch(err){
    console.log(err)
    res.status(500).end()
  }
});

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
