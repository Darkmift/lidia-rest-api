const StudentModel = require('../../models/student.model')
const ObjectId = require('mongoose').Types.ObjectId

function isValidObjectId(id){
    
    if(ObjectId.isValid(id)){
        if((String)(new ObjectId(id)) === id)
            return true;
        return false;
    }
    return false;
}

const getStudents = async () => {
  try {
    const students = await StudentModel.find({})
    return [students, null]
  } catch (error) {
    return [null, error]
  }
}

const findOneStudent = async (studentId) => {
  try {
    const student = await StudentModel.findById(studentId)
    return [student, null]
  } catch (error) {
    return [null, error]
  }
}

const addStudent = async (student) => {
  try {
    const newStudent = new StudentModel(student)
    const createdStudent = await newStudent.save();

    return [createdStudent, null]
  } catch (error) {
    return [null, error]
  }
}

module.exports = {
  getStudents,
  addStudent,
  findOneStudent,
  isValidObjectId
}