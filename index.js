
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Titanic Engine running!')
})

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`)
})
