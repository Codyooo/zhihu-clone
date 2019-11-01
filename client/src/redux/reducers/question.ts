import { Reducer } from 'redux';
import ActionTypes from '../actions/types';
import { produce, Draft } from 'immer';

interface Question {
  _id: string;
  title: string;
  description: string;
  questioner: string;
}

interface QuestionState {
  isLoading: boolean;
  error: null | {};
  questions: Array<Question>;
}

const INITIAL_STATE: QuestionState = {
  isLoading: false,
  error: null,
  questions: []
};

const questionReducer: Reducer = produce(
  (draft: Draft<QuestionState> = INITIAL_STATE, { type, payload }) => {
    switch (type) {
      case ActionTypes.FETCH_QUESTIONS_LIST_REQUEST:
        draft.isLoading = true;
        break;
      case ActionTypes.FETCH_QUESTIONS_LIST_SUCCESS:
        draft.isLoading = false;
        draft.questions = payload;
        break;
      case ActionTypes.FETCH_QUESTIONS_LIST_FAILURE:
        draft.isLoading = false;
        draft.error = payload;
        break;
      default:
        return INITIAL_STATE;
    }
  }
);

export default questionReducer;
