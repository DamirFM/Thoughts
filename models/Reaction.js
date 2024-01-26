const { Schema,  Types } = require("mongoose");
const dayjs = require("dayjs");

// Create schema reaction
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
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
            default: Date.now,
            get: (createdVal) =>
            dayjs(createdVal).format("MMM DD, YYYY [at] hh:mm a"),
        },
    },
    {
        toJSON: {
            getters: true,
        },
    })


module.exports = reactionSchema;