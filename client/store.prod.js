import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './RootReducer';
import thunk from 'redux-thunk';

export default function configureProdStore(initialState) {
  let store = createStore(rootReducer, initialState, compose(
    applyMiddleware( thunk )
    )
  );

  return store;
};