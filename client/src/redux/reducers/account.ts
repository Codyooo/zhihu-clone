import { handleActions } from 'redux-actions';
import ActionTypes from '../actions/types';
import { produce, Draft } from 'immer';
import { Reducer } from 'redux';

interface AccountState {
  readonly isLoading: boolean;
  readonly error: null | {};
  readonly token: null | string;
}

const INITIAL_STATE: AccountState = {
  isLoading: false,
  error: null,
  token: null
};

const accountReducer: Reducer = produce(
  (draft: Draft<AccountState> = INITIAL_STATE, { type, payload }) => {
    switch (type) {
      case ActionTypes.USER_SIGN_IN_REQUEST:
        draft.isLoading = true;
        draft.error = null;
        break;
      case ActionTypes.USER_SIGN_IN_SUCCESS:
        draft.isLoading = false;
        draft.token = payload;
        break;
      case ActionTypes.USER_SIGN_IN_FAILURE:
        draft.isLoading = false;
        draft.error = payload;
        break;
      case ActionTypes.USER_LOGOUT:
        return draft;
      default:
        return INITIAL_STATE;
    }
  }
);

export default accountReducer;
