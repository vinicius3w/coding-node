// Imports
const express = require('express') 
// Instantiations
const app = express() 
// Middleware
app.use((req, res, next)=>{
    console.log(`${req.method}: ${req.url}`)
    next()
})

app.use((req, res, next)=>{
    if (req.query.api_key){ // to work: curl localhost:3000/accounts?api_key=1234 -i
        next()
    } else {
        res.status(401).send({msg: 'Not authorized'})
    }
})
// Routes
app.get('/', (req, res) => {
  res.send({msg:'hello world!'})
})

app.get('/accounts', (req, res, next)=>{
    console.log('accounts inline middleware')
    next()
}, (req, res) => {
    res.send({msg:'accounts'})
  })

  app.get('/transactions', (req, res) => {
    res.send({msg:'transactions'})
  })
// Bootup
app.listen(3000)