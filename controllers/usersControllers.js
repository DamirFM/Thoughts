const { User, Thought } = require('../models');

module.exports = {
  // Get all Users
  async getUsers(req, res) {
    try {
      const users = await User.find()
      .select('-__v');
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a User
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
      .select('-__v');


      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a user
  async createUsers(req, res) {
    try {
      const user = await User.create(req.body)
      .select('-__v');
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a user
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        res.status(404).json({ message: 'No user with that ID' });
      }

      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: 'User and thoughts deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a User
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      )
      .select('-__v');

      if (!user) {
        res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Add an Frend to a User
  async addFrend(req, res) {
    try {
      const user = await User.findById(req.params.id)
      .select('-__v');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const friend = await User.findById(req.params.friendId);
      if (!friend) {
        return res.status(404).json({ message: 'Friend not found' });
      }

      // Check if the friend is already in the user's friends list
      if (!user.friends.includes(req.params.friendId)) {
        user.friends.push(req.params.friendId);
        await user.save();
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  // Remove Frend from a User
  async removeFrend(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const friend = await User.findById(req.params.friendId);
      if (!friend) {
        return res.status(404).json({ message: 'Friend not found' });
      }

      // Remove the friend from the user's friends list
      user.friends = user.friends.filter(friendId => friendId.toString() !== req.params.friendId);
      await user.save();

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};