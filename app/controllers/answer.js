const Answer = require('../models/answer');

class AnswerCtl {
  async find(ctx) {
    const { limit = 10, page = 1, q = '' } = ctx.query;
    const $limit = Math.max(limit, 1);
    const $page = Math.max(page, 1) - 1;

    const answers = await Answer.find({
      content: new RegExp(q),
      questionId: ctx.params.questionId
    })
      .limit($limit)
      .skip($page * $limit);

    ctx.body = answers;
  }

  async findHighestVoteAnswer(ctx) {
    const answer = await Answer.find({
      questionId: ctx.params.questionId
    })
      .sort('-voteCount')
      .limit(1)
      .populate('answerer');
    ctx.body = answer;
  }

  async findById(ctx) {
    const answer = await Answer.findById(
      ctx.params.id,
      'content answerer questionId'
    ).populate('answerer');
    ctx.body = answer;
  }

  async create(ctx) {
    ctx.verifyParams({
      content: { type: 'string', required: true }
    });
    const { _id: answerer } = ctx.state.user;
    const { questionId } = ctx.params;

    // 先关注问题再回答???

    const answer = await new Answer({
      ...ctx.request.body,
      answerer,
      questionId
    }).save();

    ctx.body = answer;
  }

  async update(ctx) {
    ctx.verifyParams({
      content: { type: 'string', required: false }
    });
    await ctx.state.answer.updateOne(ctx.request.body);
    ctx.body = ctx.state.answer;
  }

  async delete(ctx) {
    const { answer } = ctx.state;
    await answer.delete();
    ctx.status = 204;
  }

  //检查是否为回答者
  async checkAnswerer(ctx, next) {
    const { answer } = ctx.state;
    if (answer.answerer.toString() !== ctx.state.user._id)
      ctx.throw(404, '没有权限');
    await next();
  }

  //检查答案是否存在
  async checkAnswerExsit(ctx, next) {
    const answer = await Answer.findById(ctx.params.id, '+answerer');

    if (!answer) ctx.throw(404, '答案不存在');
    if (answer.questionId !== ctx.params.questionId)
      ctx.throw(404, '该问题下没有此答案');
    if (answer.answerer === ctx.state.user._id) ctx.throw(404, '不能重复回答');

    ctx.state.answer = answer;
    await next();
  }
}

module.exports = new AnswerCtl();
