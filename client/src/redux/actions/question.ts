import { createActions } from 'redux-actions';
import ActionsTypes from './types';
import { action, Action } from 'typesafe-actions';
import { QuestionState, Answer, QA } from './types/question';

export const fetchQAListRequest = () =>
  action(ActionsTypes.FETCH_QA_LIST_REQUEST);

export const fetchQAListSuccess = (payload: QA[]) =>
  action(ActionsTypes.FETCH_QA_LIST_SUCCESS, payload);

export const fetchQAListFailure = (payload: any) =>
  action(ActionsTypes.FETCH_QA_LIST_FAILURE, payload);

export const fetchQuestionsListRequest = (payload: any) =>
  action(ActionsTypes.FETCH_QUESTIONS_LIST_REQUEST, payload);

export const fetchQuestionsListSuccess = (payload: any) =>
  action(ActionsTypes.FETCH_QUESTIONS_LIST_SUCCESS, payload);

export const fetchQuestionsListFailure = (payload: any) =>
  action(ActionsTypes.FETCH_QUESTIONS_LIST_FAILURE, payload);

export const fetchQuestionsListMoreRequest = (payload: any) =>
  action(ActionsTypes.FETCH_QUESTIONS_LIST_REQUEST, payload);

export const fetchQuestionsListMoreSuccess = (payload: any) =>
  action(ActionsTypes.FETCH_QUESTIONS_LIST_SUCCESS, payload);
