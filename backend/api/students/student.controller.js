const { getStudents, addStudent, findOneStudent, isValidObjectId } = require('./student.service.js')

const getAll = async (req, res, next) => {
  try {
    const [students, error] = await getStudents()
    if (error) {
      console.log("🚀 ~ file: student.controller.js ~ line 7 ~ getAll ~ error", error)
      throw 'error fetching students from db'
    }
    res.json(students)
  } catch (error) {
    next(error);
  }
}

const getOne = async (req, res, next) => {
  try {
    const { studentId } = req.params;

    if (!studentId || !isValidObjectId(studentId)) {
      throw 'please provide valid studentId - ' + JSON.stringify({ studentId });
    }
    const [student, error] = await findOneStudent(studentId)
    if (error) {
      console.log("🚀 ~ file: student.controller.js ~ line 25 ~ getOne ~ error", error)
      throw 'error fetching student from db'
    }

    if (!student) {
      res.json({ success: false })
      return
    }
    res.json({ success: true, student })

  } catch (error) {
    next(error);
  }
}

const createOne = async (req, res, next) => {
  try {
    const { student } = req.body;

    if (!student) {
      throw 'error creating student - no sutdent data provided' + JSON.stringify({ student }, null, 2)
    }

    const [newStudent, error] = await addStudent(student)
    if (error) {
      console.log("🚀 ~ file: student.controller.js ~ line 20 ~ createOne ~ error", error)
      throw JSON.stringify({ student, error })
    }
    res.json(newStudent)
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAll,
  getOne,
  createOne
}