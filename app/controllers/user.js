const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/user');
const Topic = require('../models/topic');
const Question = require('../models/question');
const Answer = require('../models/answer');

// const { secret } = require('../config');

class UserCtl {
  async find(ctx) {
    // 分页 + 搜索
    const { page = 1, limit = 10 } = ctx.query;
    const $page = Math.max(page, 1) - 1;
    const $limit = Math.max(limit, 1);

    ctx.body = await User.find({ name: new RegExp(ctx.query.q) })
      .limit($limit)
      .skip($limit * $page);
  }

  async findById(ctx) {
    const { fields = '' } = ctx.query;
    const fieldsArray = fields.split(';').filter(f => f);

    const selectedFileds = fieldsArray
      .map(f => `+${f}`)
      .concat('-password')
      .join(' ');

    const populatedFields = fieldsArray
      .map(f => {
        switch (f) {
          case 'careers':
            return `careers.company careers.job`;
          case 'educations':
            return `educations.university educations.major`;
          default:
            return f;
        }
      })
      .join(' ');

    const user = await User.findById(ctx.params.id, selectedFileds).populate(
      populatedFields
    );

    if (!user) {
      ctx.throw(404, '用户不存在');
    }
    ctx.body = user;
  }

  async create(ctx) {
    ctx.verifyParams({
      name: { type: 'string', required: true },
      password: { type: 'string', required: true }
    });

    const { name } = ctx.request.body;
    const repeatedUser = await User.findOne({ name });

    if (repeatedUser) {
      ctx.throw(409, '用户已存在');
    }

    const user = await new User(ctx.request.body).save();

    if (!user) ctx.throw(404);
    ctx.body = user;
  }

  async update(ctx) {
    ctx.verifyParams({
      name: { type: 'string', required: false, unique: true },
      password: { type: 'string', required: false },
      avatar_url: { type: 'string', required: false },
      cover_url: { type: 'string', required: false },
      gender: { type: 'string', required: false },
      selfIntro: { type: 'string', required: false },
      locations: { type: 'array', itemType: 'string', required: false },
      business: { type: 'string', required: false },
      careers: { type: 'array', required: false },
      educations: { type: 'array', required: false }
    });

    const user = await User.findByIdAndUpdate(ctx.params.id, ctx.request.body, {
      new: true
    });
    if (!user) ctx.throw(404);
    ctx.body = user;
  }

  async delete(ctx) {
    const user = await User.findByIdAndDelete(ctx.params.id, ctx.request.body);
    if (!user) ctx.throw(404);
    ctx.body = user;
  }

  async login(ctx, next) {
    ctx.verifyParams({
      name: { type: 'string', required: true },
      password: { type: 'string', required: true }
    });
    const user = await User.findOne(ctx.request.body);
    if (!user) {
      // ctx.status(401);
      // await next();
      ctx.throw(401, '用户名密码不正确');
    }

    const { _id, name } = user;

    // 生成token
    const token = jsonwebtoken.sign({ _id, name }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });
    // console.log('token', token);
    ctx.body = { token };
  }

  async logout(ctx) {
    // 生成token
    // const token = jsonwebtoken.sign({ _id, name }, secret, { expiresIn: '1d' });
    ctx.body = 123;
  }

  async listFollowing(ctx) {
    const user = await User.findById(ctx.params.id, '+following').populate(
      'following'
    );

    if (!user) ctx.throw(404);

    ctx.body = user.following;
  }

  async listFollowers(ctx) {
    const user = await User.findById(ctx.params.id, '+followers').populate(
      'followers'
    );

    if (!user) ctx.throw(404);

    ctx.body = user.followers;
  }

  async follow(ctx) {
    const { _id: me } = ctx.state.user;
    const { id: him } = ctx.params;
    if (him === me) ctx.throw(403, { message: '不能关注自己' });

    await User.findByIdAndUpdate(me, {
      $addToSet: { following: him }
    });

    await User.findByIdAndUpdate(him, {
      $addToSet: { fllowers: me }
    });

    ctx.status = 204;
  }

  async unFollow(ctx) {
    const { _id: me } = ctx.state.user;
    const { id: him } = ctx.params;

    await User.findByIdAndUpdate(me, {
      $pull: { following: him }
    });
    await User.findByIdAndUpdate(him, {
      $pull: { followers: me }
    });

    ctx.status = 204;
  }

  async listFollowingTopics(ctx) {
    const user = await User.findById(ctx.params.id)
      .select('followingTopics name')
      .populate('followingTopics');

    if (!user) ctx.throw(404, '用户不存在');

    ctx.body = user;
  }

  async followTopic(ctx) {
    const { _id: me } = ctx.state.user;
    const { id: topicId } = ctx.params;

    await User.findOneAndUpdate(me, {
      $addToSet: {
        followingTopics: topicId
      }
    });

    await Topic.findByIdAndUpdate(topicId, {
      $addToSet: {
        followers: me
      }
    });
    ctx.status = 204;
  }

  async unFollowTopic(ctx) {
    const { _id: me } = ctx.state.user;
    const { id: topicId } = ctx.params;

    await User.findOneAndUpdate(me, {
      $pull: {
        followingTopics: topicId
      }
    });

    await Topic.findByIdAndUpdate(topicId, {
      $pull: {
        followers: me
      }
    });

    ctx.status = 204;
  }

  async listQuestions(ctx) {
    const questions = await Question.find({ questioner: ctx.params.id });
    ctx.body = questions;
  }

  async listFollowedQuestions(ctx) {
    const questions = await User.findById(
      ctx.params.id,
      'followingQuestions'
    ).populate('followingQuestions');

    ctx.body = questions;
  }

  async followQuestion(ctx) {
    const { _id: me } = ctx.state.user;
    const { id: question } = ctx.params;
    await User.findByIdAndUpdate(me, {
      $addToSet: {
        followingQuestions: question
      }
    });
    await Question.findByIdAndUpdate(question, {
      $addToSet: {
        followers: me
      }
    });
    ctx.status = 204;
  }

  async unfollowQestion(ctx) {
    const { _id: me } = ctx.state.user;
    const { id: question } = ctx.params;
    await User.findByIdAndUpdate(me, {
      $pull: {
        followingQuestions: question
      }
    });
    await Question.findByIdAndUpdate(question, {
      $pull: {
        followers: me
      }
    });
    ctx.status = 204;
  }

  async listLikeAnswers(ctx) {
    const user = await User.findById(ctx.params.id, '+answerLikes').populate(
      'answerLikes'
    );

    if (!user) ctx.throw(404, '用户不存在');
    ctx.body = user.answerLikes;
  }

  async likeAnswer(ctx) {
    const { id: answer } = ctx.params;
    const { _id: me } = ctx.state.user;

    await User.findByIdAndUpdate(me, {
      $addToSet: {
        answerLikes: answer
      },
      $pull: {
        answerDislikes: answer
      }
    });

    await Answer.findByIdAndUpdate(answer, {
      $inc: {
        voteCount: 1
      }
    });
    ctx.status = 204;
  }

  async dislikeAnswer(ctx) {
    const { id: answer } = ctx.params;
    const { _id: me } = ctx.state.user;

    await User.findByIdAndUpdate(me, {
      $addToSet: {
        answerDislikes: answer
      },
      $pull: {
        answerLikes: answer
      }
    });

    await Answer.findByIdAndUpdate(answer, {
      $inc: {
        voteCount: -1
      }
    });
    ctx.status = 204;
  }

  async listAnswerCollection(ctx) {
    const user = await User.findById(
      ctx.params.id,
      '+answerCollection'
    ).populate('answerCollection');

    if (!user) ctx.throw(404, '用户不存在');
    ctx.body = user.answerCollection;
  }

  async collectAnswer(ctx) {
    const { id: answer } = ctx.params;
    const { _id: me } = ctx.state.user;

    await User.findByIdAndUpdate(me, {
      $addToSet: {
        answerCollection: answer
      }
    });

    await Answer.findByIdAndUpdate(answer, {
      $inc: {
        collectCount: 1
      }
    });
    ctx.status = 204;
  }

  async uncollectAnswer(ctx) {
    const { id: answer } = ctx.params;
    const { _id: me } = ctx.state.user;

    await User.findByIdAndUpdate(me, {
      $pull: {
        answerCollection: answer
      }
    });

    await Answer.findByIdAndUpdate(answer, {
      $inc: {
        collectCount: -1
      }
    });
    ctx.status = 204;
  }
}

module.exports = new UserCtl();
