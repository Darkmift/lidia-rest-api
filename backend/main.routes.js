const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.send('api is running');
});

const studentRoutes = require('./api/students/student.routes.js');
router.use('/students', studentRoutes);

module.exports = router;