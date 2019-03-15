import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMidlleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

const middleware = [];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMidlleware = createSagaMidlleware({ sagaMonitor });

middleware.push(sagaMidlleware);

const tronMiddleware = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer : () => {};

const store = createStore(
  reducers,
  compose(
    tronMiddleware(),
    applyMiddleware(...middleware),
  ),
);

sagaMidlleware.run(sagas);

export default store;
