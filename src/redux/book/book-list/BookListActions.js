import axios from "axios"
import {
  FETCH_BOOK_LIST_REQUEST,
  FETCH_BOOK_LIST_SUCCESS,
  FETCH_BOOK_LIST_FAILURE,
  FETCH_SINGLE_BOOK
} from "./BookListTypes"

export const fetchBookListRequest = () => {
  return {
    type: FETCH_BOOK_LIST_REQUEST
  }
}

const fetchBookListSuccess = BOOK_LIST => {
  return {
    type: FETCH_BOOK_LIST_SUCCESS,
    payload: BOOK_LIST
  }
}

const fetchBookListFailure = error => {
  return {
    type: FETCH_BOOK_LIST_FAILURE,
    payload: error
  }
}

const fetchSinleBookSuccess = book => {
  return {
    type: FETCH_SINGLE_BOOK,
    payload: book
  }
}

// Load books data from API
export const loadBookList = (page, searchVal, type) => {
  return function (dispatch) {
    dispatch(fetchBookListRequest())

    const url = searchVal
      ? axios.get(`https://gutendex.com/books/?search=${searchVal}`)
      : type
      ? axios.get(`https://gutendex.com/books/?topic=${type}`)
      : axios.get(`https://gutendex.com/books/?page=${page}`)

    url
      .then(response => {
        console.log("******* Load Books Data - ", response.data)
        const booksListData = response.data
        dispatch(fetchBookListSuccess(booksListData))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchBookListFailure(errorMsg))
        console.log(error)
      })
  }
}

// Fetch single book
export const loadSingleBook = id => {
  return function (dispatch) {
    dispatch(fetchBookListRequest())
    axios
      .get(`https://gutendex.com/books/${id}`)
      .then(response => {
        console.log("******* Single  Book Data - ", response.data)
        const singleBookData = response.data
        dispatch(fetchSinleBookSuccess(singleBookData))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchBookListFailure(errorMsg))
        console.log(error)
      })
  }
}
