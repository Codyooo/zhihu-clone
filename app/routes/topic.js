const Router = require('koa-router');

const router = new Router({ prefix: '/topics' });
const auth = require('../middlewares/auth');

const {
  find,
  findById,
  create,
  update,
  listQuestions
} = require('../controllers/topic');

router
  .get('/', find)
  .get('/:id', findById)
  .post('/', auth, create)
  .patch('/:id', auth, update)
  .get('/:id/questions', listQuestions);

module.exports = router;
