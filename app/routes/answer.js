const Router = require('koa-router');

const router = new Router({ prefix: '/api/v1/questions/:questionId/answers' });
const auth = require('../middlewares/auth');

const {
  find,
  findById,
  create,
  update,
  delete: del,
  checkAnswerer,
  checkAnswerExsit,
  findHighestVoteAnswer
} = require('../controllers/answer');

router
  .get('/', find)
  .get('/highvote', findHighestVoteAnswer)
  .post('/', auth, create)
  .get('/:id', findById)
  .patch('/:id', auth, checkAnswerExsit, checkAnswerer, update)
  .del('/:id', auth, checkAnswerExsit, checkAnswerer, del);

module.exports = router;
