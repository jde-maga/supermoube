import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import middlewares from './middlewares/index';

const store = createStore(reducers, applyMiddleware(...middlewares));

if (module.hot) {
  module.hot.accept(() => {
    store.replaceReducer(combineReducers(reducers));
  });
}

export default store;
