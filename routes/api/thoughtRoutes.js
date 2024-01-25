const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    addReaction,
    removeReaction,
  } = require('../../controllers/thoughtsControllers');
  
  // /api/thoughts
  router.route('/').get(getThoughts).post(createThought);
  
  // /api/thoughts/:studentId
  router.route('/:studentId').get(getSingleThought).delete(deleteThought);
  
  // /api/thoughts/:studentId/reactions
  router.route('/:studentId/reactions').post(addReaction);
  
  // /api/students/:studentId/reactions/:reactionId
  router.route('/:studentId/reactions/:reactionId').delete(removeReaction);
  
  module.exports = router;
  