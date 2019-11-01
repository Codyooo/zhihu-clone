import { createActions } from 'redux-actions';
import ActionsTypes from './types';

export const {
    fetchQuestionsListRequest,
    fetchQuestionsListSuccess,
    fetchQuestionsListFailure,
} = createActions(
    ActionsTypes.FETCH_QUESTIONS_LIST_REQUEST,
    ActionsTypes.FETCH_QUESTIONS_LIST_SUCCESS,
    ActionsTypes.FETCH_QUESTIONS_LIST_FAILURE,
);
