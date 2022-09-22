import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBook } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch();
  const newbook = {
    id: '',
    title: '',
    author: '',
  };

  const [mybook, setMyBook] = useState(newbook);
  const addNew = () => {
    dispatch(addBook(mybook));
    setMyBook((mybook) => ({
      ...mybook,
      title: '',
      author: '',
    }));
  };

  const handleMyBooks = (e) => {
    setMyBook((mybook) => ({
      ...mybook,
      id: uuidv4(),
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="px-20 py-10 flex flex-col gap-10">
        <h2 className="text-2xl font-bold text-gray-300 uppercase">Add new book</h2>
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
          <input placeholder="Book title" className="px-7 py-2 border border-#94a3b8 sm:w-1/2" name="title" onChange={handleMyBooks} value={mybook.title} />
          <input placeholder="Author" className="px-7 py-2 border border-#94a3b8 sm:w-1/2" name="author" onChange={handleMyBooks} value={mybook.author} />
          <button type="button" className="sm:w-1/3 bg-blue-800 text-white rounded py-2" onClick={addNew}>ADD BOOK</button>
        </div>
      </div>
    </>
  );
}

export default AddBook;
