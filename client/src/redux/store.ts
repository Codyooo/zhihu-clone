import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({

});



const middewares = [sagaMiddleware, logger];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middewares)));

sagaMiddleware.run(rootSaga);

export default store;
