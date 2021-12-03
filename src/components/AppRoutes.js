import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import Home from "../containers/Home"
import PageNotFound from "./PageNotFound"
import BookList from "../containers/BookList"
import Comments from "../containers/Comments"
import BookDetails from "../containers/BookDetails"

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="book-list" element={<BookList />}>
          <Route path=":bookType" element={<BookList />} />
        </Route>
        <Route path="books" element={<BookDetails />}>
          <Route path=":id" element={<BookDetails />} />
        </Route>
      </Routes>
    </div>
  )
}

export default AppRoutes
