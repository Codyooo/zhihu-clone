import { takeLatest, call, put, all, fork } from 'redux-saga/effects';
import ActionTypes from '../actions/types';
import { login } from '../../services/account';
import Storage from '../../utils/storage';
import history from '../../utils/history'

import {
    userSignUpSuccess,
    userSignInSuccess,
    userSignUpFailure,
    userSignInFailure,
} from '../actions/account';


function* userSignUp({ payload }) {
    yield console.log('userSignUp', payload);
}

function* userSignIn({ payload }) {
    try {
        const { data: { token = null } } = yield call(login, payload);
        yield Storage.setToken(token);
        yield Storage.setRefreshToken(token);
        yield put(userSignInSuccess(token));
        history.push('/');
    } catch (error) {
        const { response: { data: { message } } } = error
        yield put(userSignInFailure(message))
    }
}

function* userLogout() {
    yield Storage.clearToken();
    history.push('/signin')
}


function* watchUserSignUp() {
    yield takeLatest(ActionTypes.USER_SIGN_UP_REQUEST, userSignUp);
}
function* watchUserSignIn() {
    yield takeLatest(ActionTypes.USER_SIGN_IN_REQUEST, userSignIn);
}

function* watchUserLogout() {
    yield takeLatest(ActionTypes.USER_LOGOUT, userLogout);
}

function* accountSaga() {
    yield all([
        fork(watchUserSignUp),
        fork(watchUserSignIn),
        fork(watchUserLogout),
    ])
}

export default accountSaga;
