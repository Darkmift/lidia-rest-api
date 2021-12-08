const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { examSChema } = require('./exam.model')
const studentSChema = new Schema
  ({
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    faculty: {
      type: String,
      required: true,
    },
    dateofBirth: {
      type: Date,
      required: true,
    },
    exams: [
      examSChema
    ]
  })

module.exports = mongoose.model('Student', studentSChema, 'students');
