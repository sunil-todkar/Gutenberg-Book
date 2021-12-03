import { combineReducers } from "redux"
import BookListReducer from "./book/book-list/BookListReducer"

const rootReducer = combineReducers({
  bookList: BookListReducer
})

export default rootReducer
