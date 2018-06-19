// Imports
const express = require('express') 
const bodyParser = require('body-parser')
//const morgan = require('morgan')
// Instantiations
const app = express() 
// Middleware
app.use(bodyParser.json())
//app.use(morgan('dev'))

let profile = {
    username: 'vcg',
    email: '[reducted]',
    url: 'http://viniciusgarcia.me'
}

// app.use((req, res, next)=>{
//     console.log(`${req.method}: ${req.url}`)
//     next()
// })

// app.use((req, res, next)=>{
//     if (req.query.api_key){ // to work: curl localhost:3000/accounts?api_key=1234 -i
//         next()
//     } else {
//         res.status(401).send({msg: 'Not authorized'})
//     }
// })
// Routes
app.get('/profile', (req, res) => {
    res.send(profile)
  })

app.post('/profile', (req, res) => {
    profile = req.body
    console.log('created', profile)
    res.sendStatus(201)
})

app.put('/profile', (req, res) => {
    Object.assign(profile, req.body)
    console.log('updated', profile)
    res.sendStatus(204)
  })

app.delete('/profile', (req, res) => {
    profile = {}
    console.log('deleted', profile)
    res.sendStatus(204)
})

// app.get('/', (req, res) => {
//   res.send({msg:'hello world!'})
// })

// app.get('/accounts', (req, res, next)=>{
//     console.log('accounts inline middleware')
//     next()
// }, (req, res) => {
//     res.send({msg:'accounts'})
//   })
// to work: curl -d '{"key": "value"}' localhost:3000/transactions?api_key=123456 -i -H 'Content-Type: application/json'
// app.post('/transactions', (req, res) => {
//     console.log(req.body)
//     res.send({msg:'transactions'})
// })
// Bootup
app.listen(3000)