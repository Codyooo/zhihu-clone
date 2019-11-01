const Router = require('koa-router');

const router = new Router({ prefix: '/api/v1/questions' });

const auth = require('../middlewares/auth');

const {
  checkQuestionExist,
  checkQuestioner
} = require('../middlewares/checkExist');

const {
  find,
  findById,
  create,
  delete: del,
  update
} = require('../controllers/question');

router
  .get('/', find)
  .post('/', auth, create)
  .get('/:id', checkQuestionExist, findById)
  .patch('/:id', auth, checkQuestionExist, checkQuestioner, update)
  .delete('/:id', auth, checkQuestionExist, checkQuestioner, del);

module.exports = router;
