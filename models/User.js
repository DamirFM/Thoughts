const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
    email: {
        type: String,
        required: true,
        max_length: 50,
      },
    thoughts: {
        type: String,
        required: true,
        max_length: 50,
      },
    friends: [assignmentSchema],
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );
  
  const User = model('user', userSchema);
  
  module.exports = User;