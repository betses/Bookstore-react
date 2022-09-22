import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { uploadBook } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch();
  const addNew = (e) => {
    e.preventDefault();
    const { title, author, category } = e.target.elements;
    const newbook = {
      item_id: uuidv4(),
      title: title.value,
      author: author.value,
      category: category.value,
    };
    dispatch(uploadBook(newbook));
    title.value = '';
    author.value = '';
    category.value = '';
  };

  return (
    <>
      <div className="px-20 py-10 flex flex-col gap-10">
        <h2 className="text-2xl font-bold text-gray-300 uppercase">Add new book</h2>
        <form className="flex flex-col sm:flex-row gap-5 sm:gap-10" onSubmit={addNew}>
          <input placeholder="Book title" className="px-7 py-2 border border-#94a3b8 sm:w-1/3" name="title" required />
          <input placeholder="Author" className="px-7 py-2 border border-#94a3b8 sm:w-1/3" name="author" required />
          <input placeholder="Category" className="px-7 py-2 border border-#94a3b8 sm:w-1/3" name="category" required />
          <button type="submit" className="sm:w-1/3 bg-blue-800 text-white rounded py-2">ADD BOOK</button>
        </form>
      </div>
    </>
  );
}

export default AddBook;
