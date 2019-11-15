import { Reducer } from 'redux';
import ActionTypes from '../actions/types';
import { produce, Draft } from 'immer';
import { QuestionState } from '../actions/types//question';

const INITIAL_STATE: QuestionState = {
  loading: false,
  moreLoading: false,
  error: null,
  data: []
};

const questionReducer: Reducer = produce(
  (draft: Draft<QuestionState> = INITIAL_STATE, action) => {
    switch (action.type) {
      case ActionTypes.FETCH_QUESTIONS_LIST_REQUEST:
        draft.loading = true;
        break;
      case ActionTypes.FETCH_QUESTIONS_LIST_SUCCESS:
        draft.loading = false;
        draft.data = action.payload;
        break;
      case ActionTypes.FETCH_QUESTIONS_LIST_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
      case ActionTypes.FETCH_QA_LIST_REQUEST:
        draft.loading = true;
        break;
      case ActionTypes.FETCH_QA_LIST_SUCCESS:
        draft.loading = false;
        draft.data = action.payload;
        break;
      case ActionTypes.FETCH_QA_LIST_FAILURE:
        draft.moreLoading = false;
        draft.error = action.payload;
        break;
      case ActionTypes.FETCH_QA_LIST_MORE_REQUEST:
        draft.moreLoading = true;
        break;
      case ActionTypes.FETCH_QA_LIST_MORE_SUCCESS:
        draft.moreLoading = false;
        draft.data = [...draft.data, ...action.payload];
        break;
      default:
        return INITIAL_STATE;
    }
  }
);

export default questionReducer;
