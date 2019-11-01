import { takeLatest, call, put, all, fork } from 'redux-saga/effects';
import ActionTypes from '../actions/types';
import { queryAllQuestions } from '../../services/question';

import {
    fetchQuestionsListSuccess,
    fetchQuestionsListFailure,
} from '../actions/question';

function* fetchQuestionsList() {
    try {
        const { data } = yield queryAllQuestions();
        yield put(fetchQuestionsListSuccess(data))
    } catch (error) {
        const { response: { data: { message } } } = error
        yield put(fetchQuestionsListFailure(message))
    }
}

function* watchFetchQuestionsList() {
    yield takeLatest(ActionTypes.FETCH_QUESTIONS_LIST_REQUEST, fetchQuestionsList);
}

function* questionSaga() {
    yield all([
        fork(watchFetchQuestionsList),
    ])
}

export default questionSaga;
