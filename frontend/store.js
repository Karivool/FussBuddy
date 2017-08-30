import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';
import createLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import { loadState, saveState } from './localStorage';

const middleware = [reduxThunk];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middleware.push(logger);
}

const persistedState = loadState();

const enhancer = applyMiddleware(...middleware);
const store = createStore(rootReducer, persistedState, enhancer);

store.subscribe(throttle(() => {
  saveState({
    coords: store.getState().coords,
    modalOpened: false,
    data: store.getState().data
    });
}, 1000));

export default store;
