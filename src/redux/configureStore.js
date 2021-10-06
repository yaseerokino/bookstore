import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import { composeWithDevTools as devTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import bookReducer from './books/books';

const reducer = combineReducers({
  books: bookReducer,
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), applyMiddleware(logger), devTools()),
);

export default store;
