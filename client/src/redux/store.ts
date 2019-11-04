import { createStore, applyMiddleware, Store } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { QuestionState } from './actions/types/question';

export interface AppState {
  question: QuestionState;
}

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({});

const middewares = [sagaMiddleware, logger];

const store: Store<AppState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middewares))
);

sagaMiddleware.run(rootSaga);

export default store;
