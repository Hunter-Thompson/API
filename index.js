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

app.get('/', (request, response) => {
  response.json({ info: 'Sample API for Legalist.' })
})


app.get('/attorney', db.getAttorney)
app.get('/attorney/:id', db.getAttorneybyid)
app.post('/createattorney', db.createAttorney)
app.get('/person', db.getPerson)
app.get('/person/:id', db.getPersonbyid)
app.post('/createperson', db.createPerson)
app.get('/case', db.getLCase)
app.get('/case/:id', db.getLCasebyid)
app.post('/createcase', db.createLCase)
//app.put('/users/:id', db.updateUser)
//app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
