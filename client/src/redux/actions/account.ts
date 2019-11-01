import { createActions } from 'redux-actions';
import ActionsTypes from '../actions/types';

export const {
    userSignInRequest,
    userSignInSuccess,
    userSignInFailure,
    userSignUpRequest,
    userSignUpSuccess,
    userSignUpFailure,
    userLogout
} = createActions(
    ActionsTypes.USER_SIGN_IN_REQUEST,
    ActionsTypes.USER_SIGN_IN_SUCCESS,
    ActionsTypes.USER_SIGN_IN_FAILURE,
    ActionsTypes.USER_SIGN_UP_REQUEST,
    ActionsTypes.USER_SIGN_UP_SUCCESS,
    ActionsTypes.USER_SIGN_UP_FAILURE,
    ActionsTypes.USER_LOGOUT,
);
