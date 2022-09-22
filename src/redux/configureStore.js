import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import statusReducer from './categories/categories';

const reducer = combineReducers({
  book: bookReducer,
  category: statusReducer,
});
const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
