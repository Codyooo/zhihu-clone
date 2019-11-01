const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    __v: { type: Number, select: false },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true, select: false },
    age: { type: Number, required: false, select: false },
    avatar_url: { type: String },
    cover_url: { type: String },
    gender: {
      type: String,
      enum: ['male', 'female'],
      default: 'male',
      required: true
    },
    selfIntro: { type: String },
    locations: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Topic' }],
      select: false
    },
    business: { type: Schema.Types.ObjectId, ref: 'Topic', select: false },
    careers: {
      type: [
        { company: { type: Schema.Types.ObjectId, ref: 'Topic' }, job: String }
      ],
      select: false
    },
    educations: {
      type: [
        {
          university: { type: Schema.Types.ObjectId, ref: 'Topic' },
          major: { type: Schema.Types.ObjectId, ref: 'Topic' },
          degree: Number,
          entrance_year: Number,
          graduation_year: Number
        }
      ],
      select: false
    },
    following: {
      type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
      select: false
    },
    followers: {
      type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
      select: false
    },
    followingTopics: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Topic' }],
      select: false
    },
    followingQuestions: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
      select: false
    },
    answerLikes: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
      select: false
    },
    answerDislikes: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
      select: false
    },
    answerCollection: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
      select: false
    }
  },
  { timestamps: true }
);

module.exports = model('User', userSchema);
