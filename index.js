const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  })

  
app.get('/', (request, response) => {
    response.json({
        info: 'Node.js, Express, and Postgres API'
    })
})
app.get('/animal', db.getAnimal)
app.get('/animal/:id', db.getAnimalById)
app.get('/animal/create/:id/:name/:species', db.addAnimal)
app.get('/animal/update/:id/:name', db.updateAnimal)
app.get('/animal/delete/:id', db.removeAnimal)
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})