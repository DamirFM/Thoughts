const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUsers,
    deleteUser,
    updateUser,
    addFrend,
    removeFrend,
  } = require('../../controllers/usersControllers');

  // /api/users
router
  .route('/')
  .get(getUsers)
  .post(createUsers);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
  .post(addFrend)
  .delete(removeFrend);

module.exports = router;