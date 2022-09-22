import axios from 'axios';

const ADD_BOOK = 'bookstore/books/addBook';
const REMOVE_BOOK = 'bookstore/books/removeBook';
const GET_BOOK = 'bookstore/books/getBook';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/50oM5lkEUSi6Y8skkWBf/books/';

const allBooks = {
  books: [],
};

const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const uploadBook = (book) => (dispatch) => {
  axios.post(baseURL, book).then(() => {
    dispatch(addBook(book));
  });
};

const getBook = (books) => ({
  type: GET_BOOK,
  payload: books,
});

const getBooksList = () => (dispatch) => {
  axios.get(baseURL)
    .then((result) => {
      const res = result.data;
      const newBooks = [];
      Object.keys(res).forEach((key) => {
        if (key) {
          newBooks.push({
            ...res[key][0],
            item_id: key,
          });
        }
      });
      dispatch(getBook(newBooks));
    });
};

const deleteBook = (id) => (dispatch) => {
  axios.delete(baseURL + id).then(() => {
    dispatch(removeBook(id));
  });
};

const bookReducer = (state = allBooks, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return {
        books: [...state.books.filter((i) => i.item_id !== action.payload)],
      };
    case GET_BOOK:
      return {
        books: action.payload,
      };
    default:
      return state;
  }
};

export default bookReducer;
export {
  addBook, removeBook, uploadBook, deleteBook, getBooksList,
};
