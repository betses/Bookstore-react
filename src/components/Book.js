import React from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteBook } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

function Book(props) {
  const bookData = props;
  const mapData = bookData.books;

  const dispatch = useDispatch();
  const removeNow = (m) => {
    dispatch(deleteBook(m));
  };
  const min = 1;
  const max = 100;
  const value = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <>
      {mapData.map((i) => (
        <div key={i.item_id} className="flex justify-between border border-#94a3b8 m-10 sm:mx-20 sm:my-10 p-6 bg-white">
          <div className="flex flex-col gap-7">
            <div>
              <h3 className="text-base font-semibold text-slate-500 ju ">{i.category}</h3>
              <h2 className="text-2xl font-bold">{i.title}</h2>
              <p className="text-lg book-author text-sky-600">{i.author}</p>
            </div>
            <div className="flex gap-4">
              <button type="button" className="w-24 border-r-2 text-sky-600 bg-transparent text-left">Comment</button>
              <button type="button" className="w-20 border-r-2 text-sky-600 bg-transparent text-left" onClick={() => removeNow(i.item_id)}>Remove</button>
              <button type="button" className="w-24 text-sky-600 bg-transparent text-left">Edit</button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className=" flex items-center gap-12 mr-16">
              <div className="hidden lg:block">
                <div className="flex gap-6 pr-10 items-center lg:border-r-2 lg:h-20">
                  <div className="w-20 h-32 flex items-center">
                    <CircularProgressbar value={value} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-narmal">
                      {value}
                      %
                    </h2>
                    <h3 className="text-base font-semibold text-slate-500 ">Completed</h3>
                  </div>
                </div>
              </div>
              <div className="w-max">
                <h3 className="text-base font-semibold text-slate-500 ">Current Chapter</h3>
                <h2 className="text-2xl font-bold my-3">Chapter 17</h2>
                <button type="button" className="bg-regal-blue text-white rounded py-2 px-16 mt-2px">Update Progress</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Book;
