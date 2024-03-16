const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({


  // task: String

  task: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  }

});

module.exports = mongoose.model('ToDoByMERN', ToDoSchema);