const { Router } = require('express');
const router = Router();
const { getAll, createOne, getOne } = require('./student.controller.js')

router
  .get('/', getAll)
  .post('/', createOne)
  .get('/:studentId', getOne)

module.exports = router;