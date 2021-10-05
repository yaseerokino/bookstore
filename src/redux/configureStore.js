import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import { composeWithDevTools as devTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import bookReducer from './books/books';

const reducer = combineReducers({
  books: bookReducer,
});

const store = createStore(
  reducer,
  compose(applyMiddleware(logger), devTools()),
);

export default store;
