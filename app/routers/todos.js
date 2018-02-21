var express = require('express')
const Todo = require('../models/todo')
const User = require('../models/user')
var session = require('express-session')
const app = express()

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

// User
app.get('/user', (request, response) => {
  User.find().then(user => {
    response.json({user})
  })
})
app.post('/newUser', (request, response) => {
  let user = new User(request.body)
  user.save((err, createdUser) => {
    if (err) {
      response.status(500).send(err)
    }
    response.status(200).send(createdUser)
  })
})
// login
app.post('/login', (request, response) => {
  User.findOne({
    email: request.body.email
  }, (err, user) => {
    if (err) throw err
    if (!user) {
      response.status(401).json({ message: 'Authentication failed. User not found.' })
    } else if (user) {
      if (!user.password === request.body.password) {
        response.status(401).json({ message: 'Authentication failed. Wrong password.' })
      } else {
        let sess = request.session
        sess.email = user.email
        sess._id = user._id
        response.status(200).send('login')
      }
    }
  })
})
app.get('/session', (request, response) => {
  let sess = request.session
  console.log(sess)
  response.status(200).send('session = ' + sess)
})
// Todo
app.get('/todos', (request, response) => {
  Todo.find().then(todos => {
    response.json({todos})
  })
})
app.post('/post', (request, response) => {
  let todo = new Todo({...request.body, user_id: request.session._id})
  todo.save((err, createdTodo) => {
    if (err) {
      response.status(500).send(err)
    }
    response.status(200).send(createdTodo)
  })
})
app.post('/put/:todoId', (request, response) => {
  Todo.findById(request.params.todoId, (err, todo) => {
    if (err) {
      response.status(500).send(err)
    } else {
      todo.description = request.body.description || todo.description
      todo.done = request.body.done || todo.done
      todo.save((err, todo) => {
        if (err) {
          response.status(500).send(err)
        }
        response.status(200).send(todo)
      })
    }
  })
})
app.post('/delete/:todoId', (request, response) => {
  Todo.findByIdAndRemove(request.params.todoId, (err, todo) => {
    if (err) {
      response.status(500).send(err)
    }
    let res = {
      message: 'Todo successfully deleted',
      id: todo._id
    }
    response.status(200).send(res)
  })
})
module.exports = app
