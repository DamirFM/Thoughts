const { User, Thought } = require('../models');

module.exports = {
// Get all Users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a User
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        // .populate('students');

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
      const user = await User.create(req.body);
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
      );

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
      console.log('You are adding an Frend!');
      console.log(req.body);
  
      try {
        const frend = await User.findOneAndUpdate(
          { _id: req.params.userId },
          { $addToSet: { frends: req.body } },
          { runValidators: true, new: true }
        );
  
        if (!frend) {
          return res
            .status(404)
            .json({ message: 'No frend found with that ID :(' });
        }
  
        res.json(frend);
      } catch (err) {
        res.status(500).json(err);
      }
    },
  // Remove Frend from a User
  async removeFrend(req, res) {
    try {
      const frend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { frend: { frendId: req.params.frendId } } },
        { runValidators: true, new: true }
      );

      if (!frend) {
        return res
          .status(404)
          .json({ message: 'No frend found with that ID :(' });
      }

      res.json(frend);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};