import React, { useState, useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component"

function Comments() {
  const [items, setItems] = useState([])
  const [noMore, setnoMore] = useState(true)
  const [page, setPage] = useState(2)

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20"
      )
      const data = await res.json()
      setItems(data)
    }

    getComments()
  }, [])

  console.log("**** Data - ", items)

  const fetchComments = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20`
    )
    const data = await res.json()
    return data
  }

  // Fetch data
  const fetchData = async () => {
    console.log("Hello")
    const commentsFromServer = await fetchComments()
    setItems([...items, ...commentsFromServer])
    if (commentsFromServer.length === 0 || commentsFromServer.length < 20) {
      setnoMore(false)
    }

    setPage(page + 1)
  }
  return (
    <div>
      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={fetchData}
        hasMore={noMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {items &&
          items.map(item => {
            return (
              <div key={item.id}>
                {item.id} - {item.name}
              </div>
            )
          })}
      </InfiniteScroll>
    </div>
  )
}

export default Comments
