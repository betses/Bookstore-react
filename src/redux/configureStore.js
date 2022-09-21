import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import statusReducer from './categories/categories';

const rootReducer = combineReducers({
  book: bookReducer,
  category: statusReducer,
});
const store = configureStore({ reducer: rootReducer });

export default store;
