const Router = require('koa-router');

const router = new Router({
  prefix: '/question/:questionId/answer/:answerId/comment'
});
const auth = require('../middlewares/auth');

const {
  find,
  findById,
  create,
  delete: del,
  checkCommentExsit,
  checkCommenter
} = require('../controllers/comment');

// 评论
router.get('/', find);
router.post('/', auth, create);
router.get('/:id', findById);
router.delete('/:id', auth, checkCommentExsit, checkCommenter, del);

module.exports = router;
