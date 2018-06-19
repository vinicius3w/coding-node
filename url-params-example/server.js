// Imports
const express = require('express') 
const bodyParser = require('body-parser')

// Instantiations
const app = express() 
// Middleware
app.use(bodyParser.json())

let profile = [{
    username: 'vcg',
    email: '[reducted]',
    url: 'http://viniciusgarcia.me'
}]

// Routes
app.get('/profile', (req, res) => {
    if (req.query.id) return res.send(profile[req.query.id])
    res.send(profile)
  })

app.post('/profile', (req, res) => {
    if (!req.body.first_name.trim() || !req.body.last_name.trim()) return res.sendStatus(400)
    let obj = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }
    profile.push(obj)
    console.log('created', profile)
    res.sendStatus(201)
})

app.put('/profile/:id', (req, res) => {
    Object.assign(profile[req.params.id], req.body)
    console.log('updated', profile[req.params.id])
    res.sendStatus(204)
  })

app.delete('/profile/:id', (req, res) => {
    profile.splice(req.params.id, 1)
    console.log('deleted', profile)
    res.sendStatus(204)
})

// Bootup
app.listen(3000)