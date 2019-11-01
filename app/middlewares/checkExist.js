const User = require('../models/user');
const Topic = require('../models/topic');
const Question = require('../models/question');
const Answer = require('../models/answer');

class CheckExist {
  //检查是否是登录用户
  async checkOwner(ctx, next) {
    if (ctx.params.id !== ctx.state.user._id) ctx.throw(403, '没有权限');
    await next();
  }

  async checkQuestioner(ctx, next) {
    const { question } = ctx.state;

    if (question.questioner.toString() !== ctx.state.user._id)
      ctx.throw(403, '没有修改问题权限');

    await next();
  }

  async checkUserExist(ctx, next) {
    const user = await User.findById(ctx.params.id);

    if (!user) ctx.throw(404, '用户不存在');

    await next();
  }

  async checkTopicExist(ctx, next) {
    const topic = await Topic.findById(ctx.params.id);

    if (!topic) ctx.throw(404, '话题不存在');
    ctx.topic = topic;
    await next();
  }

  async checkQuestionExist(ctx, next) {
    const question = await Question.findById(ctx.params.id);
    if (!question) ctx.throw(404, '问题不存在');
    ctx.state.question = question;
    await next();
  }

  async checkAnswerExist(ctx, next) {
    const answer = await Answer.findById(ctx.params.id);
    if (!answer) ctx.throw(404, '答案不存在');
    await next();
  }
}

module.exports = new CheckExist();
