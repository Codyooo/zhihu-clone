import { all, fork } from 'redux-saga/effects';
import accountSaga from './accountSaga';
import questionSaga from './questionSaga';

function* rootSagas() {
    yield all([
        fork(accountSaga),
        fork(questionSaga)
    ])
}

export default rootSagas;
