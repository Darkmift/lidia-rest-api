const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examSChema = new Schema({
  subject: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    required: true,
  },
  grade: {
    type: Number,
    required: true
  },
});

const examModel = mongoose.model('Exam', examSChema, 'exams');

module.exports = { examModel, examSChema };