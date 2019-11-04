const Comment = require('../models/comment');

class CommentCtl {
  async find(ctx) {
    const { limit = 10, page = 1, q = '', rootCommentId } = ctx.query;
    const $limit = Math.max(limit, 1);
    const $page = Math.max(page, 1) - 1;
    const { questionId, answerId } = ctx.params;

    const comment = await Comment.find(
      {
        content: new RegExp(q),
        questionId,
        answerId,
        rootCommentId
      },
      '+content'
    )
      .limit($limit)
      .skip($page * $limit)
      .populate('commenter replyTo');

    ctx.body = comment;
  }

  async count(ctx) {
    const { questionId, answerId } = ctx.params;

    const totalComments = await Comment.find({
      questionId,
      answerId,
      rootCommentId: { $exists: false }
    });

    ctx.body = {
      totalComments: totalComments.length
    };
  }

  async findById(ctx) {
    const comment = await Comment.findById(
      ctx.params.id,
      '+content +conmenter +questionId +answerId'
    ).populate('conmenter questionId answerId');
    ctx.body = comment;
  }

  async create(ctx) {
    ctx.verifyParams({
      content: { type: 'string', required: true },
      rootCommentId: { type: 'string', required: false },
      replyTo: { type: 'string', required: false }
    });

    const { _id: commenter } = ctx.state.user;
    const { questionId, answerId } = ctx.params;

    const answer = await new Comment({
      ...ctx.request.body,
      commenter,
      answerId,
      questionId
    }).save();

    ctx.body = answer;
  }

  async delete(ctx) {
    const { comment } = ctx.state;
    await comment.delete();
    ctx.status = 204;
  }

  //检查评论是否存在

  async checkCommenter(ctx, next) {
    const {
      comment: { commenter },
      user: { _id: me }
    } = ctx.state;

    if (commenter.toString() !== me) ctx.throw(404, '没有权限');
    await next();
  }

  async checkCommentExsit(ctx, next) {
    const comment = await Comment.findById(ctx.params.id, '+commenter');

    if (!comment) ctx.throw(404, '评论不存在');
    if (comment.questionId.toString() !== ctx.params.questionId)
      ctx.throw(404, '该问题下没有评论');

    if (comment.answerId.toString() !== ctx.params.answerId)
      ctx.throw(404, '该答案下没有评论');

    ctx.state.comment = comment;
    await next();
  }
}

module.exports = new CommentCtl();
