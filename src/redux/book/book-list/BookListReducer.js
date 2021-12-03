import {
  FETCH_BOOK_LIST_REQUEST,
  FETCH_BOOK_LIST_SUCCESS,
  FETCH_BOOK_LIST_FAILURE,
  FETCH_SINGLE_BOOK
} from "./BookListTypes"

const initialState = {
  loading: false,
  books: [],
  book: {},
  error: ""
}

const BookListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOK_LIST_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case FETCH_BOOK_LIST_SUCCESS: {
      return {
        loading: false,
        booksList: action.payload,
        error: ""
      }
    }
    case FETCH_BOOK_LIST_FAILURE: {
      return {
        loading: false,
        booksList: [],
        error: action.payload
      }
    }
    case FETCH_SINGLE_BOOK: {
      return {
        loading: false,
        book: action.payload,
        error: ""
      }
    }

    default:
      return state
  }
}

export default BookListReducer
