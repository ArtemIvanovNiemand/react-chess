import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'reducers';
import {createLogger} from 'redux-logger';
import saga from 'sagas/index';

export default function configureStore(initialState) {
  const logger = createLogger();
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [ sagaMiddleware, logger ]

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware));

  sagaMiddleware.run(saga);
  return store
}