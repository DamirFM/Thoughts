// const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  // Get all Thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find()
        .select('-__v');

      const thoughtsObj = {
        thoughts
      };

      res.json(thoughtsObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get a single thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' })
      }
      res.json({ thought });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // create a new thought
  async createThought(req, res) {
    try {
      // Inside the createThought method
      const { userId, thoughtText, username } = req.body;

      // Check if the user exists
      const user = await User.findById(userId)
      .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Create the thought
      const thought = await Thought.create({ thoughtText, username })
      res.json({ message: 'Thought created!'});

      // Update the user's thoughts array
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $push: { thoughts: thought._id } },
        { new: true }
      );

      res.json({ thought, user: updatedUser });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      )
      res.json({ message: 'Thought has been updated!'});

      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete a thought and remove them from the User
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId })
      res.json({ message: 'Thought has been deleted!'});

      if (!thought) {
        return res.status(404).json({ message: 'No such thought exists' });
      }

      await User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } },
        { new: true }
      );

      if (!thought) {
        return res.status(404).json({
          message: 'thought deleted, but no Users found',
        });
      }

      res.json({ message: 'thought successfully deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Add an Reaction to a thought
  async addReaction(req, res) {
    console.log('You are adding an Reaction!');
    console.log(req.body);

    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      )
      res.json({ message: 'Reaction has been added!'});

      if (!thought) {
        return res
          .status(404)
          .json({ message: 'No thought found with that ID :(' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove Reaction from a thought
  async removeReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      )
      res.json({ message: 'Reaction has been deleted!'});

      if (!thought) {
        return res
          .status(404)
          .json({ message: 'No thought found with that ID :(' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};