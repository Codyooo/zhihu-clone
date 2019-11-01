const Router = require('koa-router');

const router = new Router({ prefix: '/api/v1/users' });
const auth = require('../middlewares/auth');

const {
  find,
  findById,
  create,
  update,
  delete: del,
  login,
  logout,
  listFollowing,
  listFollowers,
  follow,
  unFollow,
  followTopic,
  unFollowTopic,
  listFollowingTopics,
  listQuestions,
  listFollowedQuestions,
  followQuestion,
  unfollowQestion,
  listLikeAnswers,
  likeAnswer,
  dislikeAnswer,
  listAnswerCollection,
  collectAnswer,
  uncollectAnswer
} = require('../controllers/user');

const {
  checkUserExist,
  checkOwner,
  checkTopicExist,
  checkQuestionExist,
  checkAnswerExist
} = require('../middlewares/checkExist');

// 用户CRUD
router.get('/', find);
router.post('/', create);
router.get('/:id', findById);
router.patch('/:id', auth, checkOwner, update);
router.delete('/:id', auth, checkOwner, del);

// 登录
router.post('/login', login);
router.post('/logout', auth, logout);

// 关注与取关
router.get('/:id/following', listFollowing);
router.get('/:id/followers', listFollowers);
router.put('/follow/:id', auth, checkUserExist, follow);
router.delete('/follow/:id', auth, checkUserExist, unFollow);

// 话题
router.get('/:id/followingTopics', listFollowingTopics);
router.put('/followTopic/:id', auth, checkTopicExist, followTopic);
router.delete('/followTopic/:id', auth, checkTopicExist, unFollowTopic);

//问题
router.get('/:id/followingQuestions', listFollowedQuestions);
router.put('/followQuestion/:id', auth, checkQuestionExist, followQuestion);
router.delete('/followQuestion/:id', auth, checkQuestionExist, unfollowQestion);

// 获取用户的提问
router.get('/:id/questions', listQuestions);

// 点赞
router.get('/:id/likeAnswers', listLikeAnswers);
router.put('/likeAnswer/:id/', auth, checkAnswerExist, likeAnswer);
router.delete('/likeAnswer/:id/', auth, checkAnswerExist, dislikeAnswer);

//收藏
router.get('/:id/answerCollection', listAnswerCollection);
router.put('/collectAnswer/:id', auth, collectAnswer);
router.delete('/collectAnswer/:id', auth, uncollectAnswer);

module.exports = router;
