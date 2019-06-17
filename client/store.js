import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import rootReducer from './RootReducer';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promiseMiddleware from '../helpers/promiseMiddleware';

const logger = createLogger();

export default function configureDevStore(initialState) {
  let store = createStore(rootReducer, initialState, compose(
    applyMiddleware( promiseMiddleware, thunk ),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    )
  );

  // if (module.hot) {
  //   module.hot.accept('./App', () => {
  //     const nextReducer = require('./App').default;
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store;
}
