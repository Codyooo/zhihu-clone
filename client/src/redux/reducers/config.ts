import { Reducer } from 'redux';
import ActionTypes from '../actions/types';
import { produce, Draft } from 'immer';
import { QuestionState } from '../actions/types//question';
import { boolean } from 'yup';

const INITIAL_STATE: any = {
  searchFocus:false,
};

const questionReducer: Reducer = produce(
  (draft: Draft<any> = INITIAL_STATE, action) => {
    switch (action.type) {
      case ActionTypes.FETCH_QUESTIONS_LIST_REQUEST:
        draft.loadding = true;
        break;
      default:
        return INITIAL_STATE;
    }
  }
);

export default questionReducer;
