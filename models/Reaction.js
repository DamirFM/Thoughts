const { Schema, model } = require('mongoose');

// Schema to create User model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            timestamps: true,
            get: (date) => timeSince(date),
        },
    },
    {
        toJSON: {
            getters: true,
        },
    })


module.exports = reactionSchema;