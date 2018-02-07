
require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/Todo`, { useMongoClient: true })
const port = process.env.PORT || 9999
const Todo = require('./app/models/todo')

app.get('/todos', (request, response) => {
  Todo.find().then(todos => {
    response.json({todos})
  })
})

app.post('/post', (request, response) => {
  let todo = new Todo(request.body)
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

app.listen(port)
console.log('Server is running on port: ' + port)