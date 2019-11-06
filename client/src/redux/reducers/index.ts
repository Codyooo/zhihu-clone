import { combineReducers, Reducer } from 'redux';
import accountReducer from './account';
import questionReducer from './question';
import configReducer from './config';

const rootReducer: Reducer = combineReducers({
  account: accountReducer,
  question: questionReducer,
  config: configReducer
});

export default rootReducer;
