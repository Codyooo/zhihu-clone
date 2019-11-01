const Router = require('koa-router');

const router = new Router({ prefix: '/questions/:questionId/answers' });
const auth = require('../middlewares/auth');

const {
  find,
  findById,
  create,
  update,
  delete: del,
  checkAnswerer,
  checkAnswerExsit
} = require('../controllers/answer');

router
  .get('/', find)
  .post('/', auth, create)
  .get('/:id', findById)
  .patch('/:id', auth, checkAnswerExsit, checkAnswerer, update)
  .del('/:id', auth, checkAnswerExsit, checkAnswerer, del);

module.exports = router;
