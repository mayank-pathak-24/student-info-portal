const mongoose = require('mongoose');

const personalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  password:{
    type:String,
    required:true,
    unique:true
  },

},{timestamps:true});

const Student = mongoose.model('Student', personalSchema);

module.exports = Student;
