const getAll = async (req, res, next) => {
  try {
    const students = ['student1']
    res.json(students)
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAll,
}