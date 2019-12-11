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
  //response.json({ info: 'Sample API for Legalist.' })
  response.send('Sdasdample API for Legalist. Available options: /attorney, /attorney/id, /createattorney, /deleteattorney & /person, /person/id, /createperson, /deleteperson/id & /case, /case/id, /createcase, /deletecase/id ')
})

app.get('/attorney', db.getAttorney)
app.get('/attorney/:id', db.getAttorneybyid)
app.post('/createattorney', db.createAttorney)
app.delete('/deleteattorney/:id', db.deleteAttorney)

app.get('/person', db.getPerson)
app.get('/person/:id', db.getPersonbyid)
app.post('/createperson', db.createPerson)
app.delete('/deleteperson/:id', db.deletePerson)


app.get('/case', db.getLCase)
app.get('/case/:id', db.getLCasebyid)
app.post('/createcase', db.createLCase)
app.delete('/deletecase/:id', db.deleteCase)



app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
