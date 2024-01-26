const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const dayjs = require("dayjs");

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
            default: Date.now,
            get: (createdVal) =>
            dayjs(createdVal).format("MMM DD, YYYY [at] hh:mm a"),
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