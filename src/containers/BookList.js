import React, { useState, useEffect } from "react"
import {
  Container,
  Box,
  Typography,
  Paper,
  InputBase,
  IconButton,
  Card,
  Grid,
  CardMedia,
  CardContent
} from "@mui/material"
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone"
import SearchIcon from "@mui/icons-material/Search"
import { makeStyles } from "@mui/styles"
import { Link } from "react-router-dom"
import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { loadBookList } from "../redux/book/book-list/BookListActions"
import Loader from "../components/Loader"

const useStyles = makeStyles(theme => ({
  grayBG: {
    backgroundColor: "#f8f7ff !important"
  },
  searchInput: {
    backgroundColor: "#f0f0f6 !important",
    borderRadius: "4px",
    padding: "10px",
    height: "40px",
    boxShadow: "none !important",
    display: "flex !important"
  },
  searchButton: {
    "&:hover": {
      background: "none !important"
    }
  },
  bookNameTitle: {
    fontSize: "12px !important",
    color: "#333333 !important",
    textTransform: "uppercase",
    lineHeight: "18px"
  },
  bookAuthorTitle: {
    fontSize: "12px !important",
    color: "#a0a0a0 !important",
    textTransform: "capitalize",
    fontWeight: "700 !important"
  },
  backLink: {
    cursor: "pointer",
    marginRight: "10px"
  },
  cardContent: {
    minHeight: "120px",
    padding: "7px 0px !important"
  },
  bookPicture: {
    maxWidth: "100% !important",
    objectFit: "fill !important",
    border: "1px solid transparent",
    borderRadius: "10px"
  },
  cursorPointer: {
    cursor: "pointer",
    textDecoration: "none"
  },
  girdBookItem: {
    paddingTop: "10px !important"
  }
}))

const BookList = () => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const classes = useStyles()
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const BooksData = useSelector(state => state.bookList)
  let params = useParams()
  const [bookType, setBookType] = useState("")

  useEffect(() => {
    // Reading URL parameter for book type
    if (params) {
      capitalizefirstLetter(params && params.bookType)
      dispatch(loadBookList(page, search, params && params.bookType))
    } else {
      dispatch(loadBookList(page, search, params && params.bookType))
    }
  }, [])

  // Back to previous page
  const onBackClick = e => {
    e.preventDefault()
    navigate("/")
  }

  // Capitalize first letter in string
  const capitalizefirstLetter = string => {
    let bookName = string.charAt(0).toUpperCase() + string.slice(1)
    setBookType(bookName)
  }

  // Add elipses to string greater than 20 characters
  const truncateText = str => {
    return str && str.length > 38 ? str.substring(0, 35) + "..." : str
  }

  // On book search
  const onBookSearch = event => {
    let val = event.target.value
    setSearch(val)
    if (val == "") {
      dispatch(loadBookList(page, val, bookType))
    }
  }

  // Download a book
  const onBookDownload = () => {}

  const onSubmitForm = e => {
    e.preventDefault()
    dispatch(loadBookList(page, search, bookType))
  }

  return (
    <div>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            p: 1,
            m: 1
          }}
        >
          <Typography variant="h2" color="primary">
            <ArrowBackTwoToneIcon
              onClick={onBackClick}
              className={classes.backLink}
            />
            {bookType}
          </Typography>
        </Box>
        <Box>
          <Paper
            component="form"
            className={classes.searchInput}
            onSubmit={onSubmitForm}
          >
            <IconButton
              type="submit"
              ela
              aria-label="search"
              className={classes.searchButton}
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search google maps" }}
              value={search}
              onChange={onBookSearch}
            />
          </Paper>
        </Box>
      </Container>
      <Box className={BooksData.loading ? "" : classes.grayBG}>
        <Container>
          <Box mt={9} mb={9}>
            {BooksData.loading ? (
              <Loader />
            ) : BooksData &&
              BooksData.booksList &&
              BooksData.booksList.results &&
              BooksData.booksList.results.length === 0 ? (
              <h2
                style={{
                  textAlign: "center"
                }}
              >
                No Records Found
              </h2>
            ) : (
              <Grid container spacing={3} pt={8} pb={5}>
                {BooksData &&
                  BooksData.booksList &&
                  BooksData.booksList.results &&
                  BooksData.booksList.results.map(book => {
                    return (
                      <Grid
                        item
                        xs={12}
                        lg={2}
                        md={3}
                        sm={6}
                        className={classes.girdBookItem}
                      >
                        <Card
                          sx={{ maxWidth: 345 }}
                          className={classes.cursorPointer}
                          onClick={onBookDownload}
                          component={Link}
                          to={`/books/${book.id}`}
                          key={book.id}
                        >
                          <CardMedia
                            component="img"
                            height="200"
                            image={
                              book && book.formats && book.formats["image/jpeg"]
                            }
                            className={classes.bookPicture}
                            alt="green iguana"
                          />
                          <CardContent className={classes.cardContent} p={0}>
                            <Typography
                              gutterBottom
                              variant="subtitle1"
                              component="div"
                              className={classes.bookNameTitle}
                            >
                              {truncateText(book.title)}
                            </Typography>
                            <Typography
                              variant="body2"
                              className={classes.bookAuthorTitle}
                            >
                              {/* {book &&
                            book.authors[0] &&
                            book &&
                            book.authors[0].name} */}
                              {truncateText(
                                book &&
                                  book.authors[0] &&
                                  book &&
                                  book.authors[0].name
                              )}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  })}
              </Grid>
            )}
          </Box>
        </Container>
      </Box>
    </div>
  )
}

export default BookList
