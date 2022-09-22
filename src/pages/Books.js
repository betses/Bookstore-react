import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from '../components/AddBook';
import Book from '../components/Book';

function Books() {
  const books = useSelector((state) => state.book.books);
  return (
    <>
      <Book books={books} />
      <AddBook />
    </>
  );
}

export default Books;
