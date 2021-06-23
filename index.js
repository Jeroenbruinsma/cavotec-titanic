const express = require("express");
const morgan = require("morgan");
const passengers = require("./models").passengers;
const {validateInput} = require("./validations")

const app = express();
const port = 5000;

app.use(morgan("dev"));
app.use(express.json());


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
    res.status(500).end()
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

app.post("/people", async (req, res) => {
  const {survived,passengerClass,name,sex,age,siblingsOrSpousesAboard,parentsOrChildrenAboard,fare} = req.body
  if (validateInput( survived, "boolean", null , res )) return null
  if (validateInput( passengerClass, "number", [1,2,3] , res )) return null
  if (validateInput( name, "string", null , res )) return null
  if (validateInput( sex, "string", ["male", "female", "other"] , res )) return null
  if (validateInput( age, "number", null , res )) return null
  if (validateInput( siblingsOrSpousesAboard, "number", null , res )) return null
  if (validateInput( parentsOrChildrenAboard, "number", null , res )) return null
  if (validateInput( fare, "number", null , res )) return null

try{
  const person = await passengers.create({survived,passengerClass,name,sex,age,siblingsOrSpousesAboard,parentsOrChildrenAboard,fare})
    res.json(person)
  }
  catch(err){
    console.log(err)
    res.status(500).end()
  }
});

app.put("/people/:id", async (req, res) => {
  const {id} = req.params
  const {survived,passengerClass,name,sex,age,siblingsOrSpousesAboard,parentsOrChildrenAboard,fare} = req.body
  if (validateInput( survived, "boolean", null , res )) return null
  if (validateInput( passengerClass, "number", [1,2,3] , res )) return null
  if (validateInput( name, "string", null , res )) return null
  if (validateInput( sex, "string", ["male", "female"] , res )) return null
  if (validateInput( age, "number", null , res )) return null
  if (validateInput( siblingsOrSpousesAboard, "number", null , res )) return null
  if (validateInput( parentsOrChildrenAboard, "number", null , res )) return null
  if (validateInput( fare, "number", null , res )) return null

try{
  const person = await passengers.findOne({ where: {id}})
  if(!person){
    res.status(404).end();
    return
  }
  const personUpdated = await person.update({survived,passengerClass,name,sex,age,siblingsOrSpousesAboard,parentsOrChildrenAboard,fare})
    res.json(personUpdated)
  }
  catch(err){
    console.log(err)
    res.status(500).end()
  }
});

app.delete("/people/:id", async (req, res) => {
  const {id} = req.params
  try{
    const destroyCount = await passengers.destroy({ where: {id}})
    if(destroyCount !== 1){
      res.status(404).end();
      return
    }
    res.status(200).end()
  }
  catch(err){
    console.log(err)
    res.status(500).end()
  }
});

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
