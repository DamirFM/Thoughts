const router = require('express').Router();

const {
    getUsers,
    // getSingleStudent,
    createUsers,
    // deleteStudent,
    // addAssignment,
    // removeAssignment,
  } = require('../../controllers/studentController');

  // /api/students
router.route('/').get(getUsers).post(createUsers);

module.exports = router;