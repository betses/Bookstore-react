import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

function Book(props) {
  const bookData = props;
  const mapData = bookData.books;

  const dispatch = useDispatch();
  const removeNow = (m) => {
    dispatch(deleteBook(m));
  };

  return (
    <>
      {mapData.map((i) => (
        <div key={i.item_id} className="flex justify-between border border-#94a3b8 m-10 sm:mx-20 sm:my-10 p-6 bg-white">
          <div className="flex flex-col gap-7">
            <div>
              <h3 className="text-base font-semibold text-slate-500 ">{i.genre}</h3>
              <h2 className="text-2xl font-bold">{i.title}</h2>
              <p className="text-lg book-author text-sky-600">{i.author}</p>
            </div>
            <button type="button" className="text-base bg-blue-800 text-white py-2 sm:text-sky-600 sm:bg-transparent sm:w-1/12 sm:text-left" onClick={() => removeNow(i.item_id)}>Remove</button>
          </div>
          <div className="w-1/4 hidden sm:block">
            <h3 className="text-base font-semibold text-slate-500 ">Current Chapter</h3>
            <h2 className="text-2xl font-bold my-3">Chapter 17</h2>
            <button type="button" className="bg-sky-400 text-white rounded py-2 px-16 mt-2px">Update Progress</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Book;
