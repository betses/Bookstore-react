const ADD_BOOK = 'bookstore/books/addBook';
const REMOVE_BOOK = 'bookstore/books/removeBook';
const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state.filter((i) => i.title !== action.book.title)];
    default:
      return state;
  }
};

const addBook = () => ({
  type: ADD_BOOK,
  book: {
    title: 'the power of Habit',
  },
});

const removeBook = () => ({
  type: REMOVE_BOOK,
  book: {
    title: 'the power of Habit',
  },
});

export default bookReducer;
export { addBook, removeBook };
