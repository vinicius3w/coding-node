// Imports
const express = require('express') 
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const routes = require('./routes')

let storage = {
  posts: [{
    name: 'Top 10 ES6 Features every Web Developer must know',
    url: 'https://webapplog.com/es6',
    text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
    comments: [
      {text: 'Cruel...var { house, mouse} = No type optimization at all'},
      {text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.'},
      {text: '(p1,p2)=>{ … } ,i understand this ,thank you !'}
    ]
    }
  ]
}

// Instantiations
let app = express()

const posts = routes.posts;
const comments = routes.comments;

// Middleware
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.use((req, res, next)=> {
  req.storage = storage
  next()
})

// Routes
app.get('/posts', routes.posts.getPosts)
app.post('/posts', routes.posts.addPost)
app.put('/posts/:id', routes.posts.updatePost)
app.delete('/posts/:id', routes.posts.removePost)

app.get('/posts/:id/comments', routes.comments.getComments)
app.post('/posts/:id/comments', routes.comments.addComment)
app.put('/posts/:id/comments/:cid', routes.comments.updateComment)
app.delete('/posts/:id/comments/:cid', routes.comments.removeComment)

// Bootup
app.listen(3000)