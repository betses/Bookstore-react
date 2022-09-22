import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from '../components/AddBook';
import Book from '../components/Book';
import { getBooksList } from '../redux/books/books';

function Books() {
  const books = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksList());
  }, [dispatch]);

  return (
    <>
      <Book books={books} />
      <AddBook />
    </>
  );
}

export default Books;
