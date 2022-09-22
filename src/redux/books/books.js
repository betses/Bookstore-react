import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/addBook';
const REMOVE_BOOK = 'bookstore/books/removeBook';

const allBooks = {
  books: [
    {
      id: uuidv4(),
      title: 'The power of Habit',
      author: 'James Clear',
    },
  ],
};

const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

const bookReducer = (state = allBooks, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return {
        books: [...state.books.filter((i) => i.id !== action.book.id)],
      };
    default:
      return state;
  }
};

export default bookReducer;
export { addBook, removeBook };
