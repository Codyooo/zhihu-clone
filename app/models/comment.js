const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const commentSchema = new Schema(
  {
    __v: { type: Number, select: false },
    content: { type: String, select: false },
    commenter: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    questionId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Question'
    },
    answerId: { type: Schema.Types.ObjectId, required: true, ref: 'AnswerId' },
    rootCommentId: { type: Schema.Types.ObjectId, ref: 'Comment' },
    replyTo: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);

module.exports = model('Comment', commentSchema);
