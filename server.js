require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const todos = require('./app/routers/todos')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/Todo`, { useMongoClient: true })
const port = process.env.PORT || 9999

app.use('', todos)

app.listen(port)
console.log('Server is running on port: ' + port)
