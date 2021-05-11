var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/itcast', { useNewUrlParser: true, useUnifiedTopology: true });
var Schema = mongoose.Schema;

var studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  age: {
    type: Number,
  },
  hobbies: {
    type: String
  }
})
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
