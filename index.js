const express = require('express')
const app = express()
const morgan = require('morgan')

// express for routing to static FE and to bundle JS responses
app.use(express.json())
app.use(express.static('build'))
// morgan to log requests
app.use( morgan(function (tokens, req, res) {
  let output = [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
  ]
  if (tokens.method(req,res) == 'POST') {
    output.push(JSON.stringify(req.body))
  }
  return output.join(' ')
}))

let persons =
  [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    }
  ]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/info', (req, res) => {
  res.send(`Phonebook has info for ${persons.length} people </br> ${new Date()}`)
})

app.get('/api/persons/:id', (request, response) => {
  const person = persons.find(note => note.id === Number(request.params.id))

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  persons = persons.filter(person => person.id !== Number(request.params.id))

  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body
  console.log(request.headers)
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'content missing'
    })
  } else if (persons.findIndex((person => person.name === body.name)) != -1) {
    return response.status(418).json({
      error: 'phonebook already contains this name'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: Math.floor(Math.random() * 10000),
  }
  persons = persons.concat(person)
  response.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})