import { combineReducers, Reducer } from 'redux';
import accountReducer from './account';
import questionReducer from './question';

const rootReducer: Reducer = combineReducers({
  account: accountReducer,
  question: questionReducer
});

export default rootReducer;
