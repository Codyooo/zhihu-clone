const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const answerSchema = new Schema(
  {
    __v: { type: Number, select: false },
    answerer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    questionId: { type: String, required: true },
    voteCount: { type: Number, required: true, default: 0 },
    collectCount: { type: Number, required: true, default: 0 }
  },
  { timestamps: true }
);

module.exports = model('Answer', answerSchema);
