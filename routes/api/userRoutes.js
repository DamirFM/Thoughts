const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUsers,
    deleteUser,
    updateUser,
  } = require('../../controllers/usersControllers');

  // /api/users
router.route('/').get(getUsers).post(createUsers);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;