import { takeLatest, call, put, all, fork } from 'redux-saga/effects';
import ActionTypes from '../actions/types';
import { queryAllQuestions } from '../../services/question';
import { queryAnswersById, IAnswer, IAnswerer } from '../../services/answer';
import { queryComments } from '../../services/conment';
import { get } from 'lodash';

import {
  fetchQuestionsListSuccess,
  fetchQuestionsListFailure,
  fetchQAListSuccess,
  fetchQAListFailure,
  fetchQAListMoreSuccess
} from '../actions/question';
import { sleep } from '../../utils/delay';

function* fetchQuestionsList() {
  try {
    const { data } = yield queryAllQuestions();
    yield put(fetchQuestionsListSuccess(data));
  } catch (error) {
    const {
      response: {
        data: { message }
      }
    } = error;
    yield put(fetchQuestionsListFailure(message));
  }
}

function* getFormattedList() {
  const { data: questions } = yield queryAllQuestions();

  if (questions.length > 0) {
    // 获取每个问题最高赞答案
    const answerPromises = questions.map(({ _id }: any) => {
      return queryAnswersById(_id, true);
    });

    const answers = yield Promise.all(answerPromises);

    // 获取每个答案的评论列表
    const commentsPromises = answers.map(({ data }: any) => {
      if (data.length > 0) {
        const { questionId, _id } = data[0] as IAnswer;
        return queryComments(questionId, _id, true);
      }
      return null;
    });

    const commentsResult = yield Promise.all(commentsPromises);

    // 将回答 和 评论挂到question上
    questions.forEach((q: any, index: any) => {
      const answer = get(answers, [index, 'data', 0], null);
      const comments = get(commentsResult, [index, 'data', 'totalComments'], 0);
      q.answer = answer;
      q.comments = comments;
    });
    return questions;
  }
}

function* fetchQAList() {
  try {
    const questions = yield getFormattedList();

    yield put(fetchQAListSuccess(questions));

    //
    // queryAnswersById(data);
  } catch (error) {
    put(fetchQAListFailure(error));
  }
}

function* fetchMoreQAList() {
  try {
    const questions = yield getFormattedList();
    yield sleep(800);
    yield put(fetchQAListMoreSuccess(questions));
    //
    // queryAnswersById(data);
  } catch (error) {
    put(fetchQAListFailure(error));
  }
}

function* watchFetchQuestionsList() {
  yield takeLatest(
    ActionTypes.FETCH_QUESTIONS_LIST_REQUEST,
    fetchQuestionsList
  );
}

function* watchFetchQALIST() {
  yield takeLatest(ActionTypes.FETCH_QA_LIST_REQUEST, fetchQAList);
}

function* watchFetchMoreQALIST() {
  yield takeLatest(ActionTypes.FETCH_QA_LIST_MORE_REQUEST, fetchMoreQAList);
}

function* questionSaga() {
  yield all([
    fork(watchFetchQuestionsList),
    fork(watchFetchQALIST),
    fork(watchFetchMoreQALIST)
  ]);
}

export default questionSaga;
