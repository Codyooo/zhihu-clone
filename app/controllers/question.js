const Question = require('../models/question');

class QuestionCtl {
  async find(ctx) {
    const { limit = 10, page = 1 } = ctx.query;
    const $limit = Math.max(limit, 1);
    const $page = Math.max(page, 1) - 1;

    const q = new RegExp(ctx.query.q);

    const questions = await Question.find({
      $or: [{ name: q }, { description: q }]
    })
      .limit($limit)
      .skip($page);

    ctx.body = questions;
  }

  async findById(ctx) {
    const { fields = '' } = ctx.query;
    const selectedFileds = fields
      .split(';')
      .map(f => `+${f}`)
      .join(' ');
    const question = await Question.findById(
      ctx.params.id,
      selectedFileds
    ).populate('questioner topics');
    if (!question) ctx.throw(404);
    ctx.body = question;
  }

  async create(ctx) {
    const question = await new Question({
      ...ctx.request.body,
      questioner: ctx.state.user._id
    }).save();

    ctx.body = question;
  }

  async update(ctx) {
    await ctx.state.question.updateOne(ctx.request.body, {
      new: true
    });
    ctx.status = 204;
  }

  async delete(ctx) {
    await ctx.state.question.remove();
    ctx.status = 204;
  }
}

module.exports = new QuestionCtl();
