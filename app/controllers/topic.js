const Topic = require('../models/topic');
const Question = require('../models/question');

class TopicCtl {
  async find(ctx) {
    const { limit = 10 } = ctx.query;
    const { page = 1 } = ctx.query;
    const $limit = Math.max(limit, 1);
    const $pageNum = Math.max(page, 1) - 1;

    ctx.body = await Topic.find({ name: new RegExp(ctx.query.q) })
      .limit($limit)
      .skip(limit * $pageNum);
  }

  async findById(ctx) {
    const { fields = '' } = ctx.query;
    const selectedFileds = fields
      .split(';')
      .map(f => `+${f}`)
      .join(' ');
    const topic = await Topic.findById(ctx.params.id, selectedFileds).populate(
      'followers'
    );
    if (!topic) ctx.throw(404);
    ctx.body = topic;
  }

  async create(ctx) {
    ctx.verifyParams({
      name: { type: 'string', required: true },
      avatar_url: { type: 'string', required: false },
      introduction: { type: 'string', required: false }
    });
    const topic = await new Topic(ctx.request.body).save();
    ctx.body = topic;
  }

  async update(ctx) {
    ctx.verifyParams({
      name: { type: 'string', required: false },
      avatar_url: { type: 'string', required: false },
      introduction: { type: 'string', required: false }
    });
    const topic = await Topic.findByIdAndUpdate(
      ctx.params.id,
      ctx.request.body,
      { new: true }
    );

    ctx.body = topic;
  }

  async listQuestions(ctx) {
    const questions = await Question.find({ topics: ctx.params.id });
    ctx.body = questions;
  }
}

module.exports = new TopicCtl();
