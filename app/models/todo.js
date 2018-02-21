const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Todo = new Schema({
  description: String,
  done: Boolean,
  user_id: String
})

module.exports = mongoose.model('Todo', Todo)
