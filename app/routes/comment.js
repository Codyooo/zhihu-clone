const Router = require('koa-router');

const router = new Router({
  prefix: '/api/v1/question/:questionId/answer/:answerId/comment'
});
const auth = require('../middlewares/auth');

const {
  find,
  count,
  findById,
  create,
  delete: del,
  checkCommentExsit,
  checkCommenter
} = require('../controllers/comment');

// 评论
router.get('/', find);
router.get('/count', count);
router.post('/', auth, create);
router.get('/:id', findById);
router.delete('/:id', auth, checkCommentExsit, checkCommenter, del);

module.exports = router;
