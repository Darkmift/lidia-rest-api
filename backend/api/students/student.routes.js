const { Router } = require('express');
const router = Router();
const { getAll } = require('./student.controller.js')

router.get('/', getAll);

module.exports = router;