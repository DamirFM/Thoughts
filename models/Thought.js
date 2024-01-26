const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const timeSince = (date) => {
    // Your implementation here
    return `${Math.floor((Date.now() - date) / 1000)} seconds ago`;
  };

// Schema to create User model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            maxlength: 280,
            required: true,
        },
        createdAt: {
            type: Date,
            timestamps: true,
            get: (date) => timeSince(date),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
    })
// Virtual called friendCount that retrieves the length of the user's friends array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
// Using mongoose.model() to compile a model based on the schema
const Thought = model('thought', thoughtSchema);

module.exports = Thought;