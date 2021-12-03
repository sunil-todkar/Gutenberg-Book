import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Container, Box, Typography, Grid } from "@mui/material"
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Button from "@mui/material/Button"
import StarIcon from "@mui/icons-material/Star"
import { makeStyles } from "@mui/styles"
import Loader from "../components/Loader"
import useMediaQuery from "@mui/material/useMediaQuery"
import { loadSingleBook } from "../redux"

// Define style
const useStyles = makeStyles(theme => ({
  bookSlavesList: {
    paddingTop: "0px !important",
    paddingBottom: "0px !important",
    "& .css-hyocqe-MuiListItem-root": {
      padding: "0px !important"
    },
    "& .MuiListItemIcon-root": {
      minWidth: "30px"
    },
    "& .MuiSvgIcon-root": {
      fontSize: "18px"
    }
  },
  bookImage: {
    border: "1px solid #e3e3e3",
    borderRadius: "10px",
    width: "214px",
    height: "265px"
  },
  textWrapper: {
    "& .css-j704zd-MuiTypography-root": {
      marginBottom: "10px"
    }
  },
  downloadButton: {
    width: "214px",
    marginTop: "10px !important",
    width: "214px",
    marginTop: "10px !important",
    border: "1px solid #5E56E7",
    padding: "10px",
    display: "block",
    borderRadius: "10px",
    textAlign: "center",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#f7f7f7"
    },
    "&:active": {
      color: "#5E56E7"
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
      margin: "0 auto"
    }
  },
  backLink: {
    cursor: "pointer",
    marginRight: "10px"
  },
  imageWrapper: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center"
    }
  }
}))

const BookDetails = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const book = useSelector(state => state.bookList)
  const navigate = useNavigate()
  const params = useParams()

  // Use Effect functions
  useEffect(() => {
    if (params && params.id) {
      let bookID = Number(params && params.id)
      dispatch(loadSingleBook(bookID))
    }
  }, [])

  return (
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
            onClick={() => navigate(-1)}
            className={classes.backLink}
          />
          Book Details
        </Typography>
      </Box>
      {book.loading ? (
        <Loader />
      ) : (
        <Box mt={5} className={classes.textWrapper}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} lg={3}>
              <Box className={classes.imageWrapper}>
                <img
                  src={
                    book.book &&
                    book.book.formats &&
                    book.book.formats["image/jpeg"]
                  }
                  className={classes.bookImage}
                />
                <a
                  variant="outlined"
                  className={classes.downloadButton}
                  href={`${
                    book.book &&
                    book.book.formats &&
                    book.book.formats["text/plain; charset=utf-8"]
                  }`}
                >
                  Download
                </a>
              </Box>
            </Grid>
            <Grid item lg={9}>
              <Box mt={3}>
                <Typography variant="body1">
                  Title - {book.book && book.book.title}
                </Typography>
                <Typography variant="body1">
                  Language Available -
                  {book.book &&
                    book.book.languages &&
                    book.book.languages.map(item => {
                      return item
                    })}
                </Typography>
                <Typography variant="body1">
                  Copyright - {book.book && book.book.copyright ? "Yes" : "No"}
                </Typography>
                <Typography variant="body1">
                  Download Count - {book.book && book.book.download_count}
                </Typography>
              </Box>
              <Box>
                <Grid container spacing={1}>
                  <Grid item lg={12} sm={12}>
                    <Typography variant="body1">
                      Author Name -
                      {book.book &&
                        book.book.authors &&
                        book.book.authors.map(item => {
                          return item.name
                        })}
                    </Typography>
                  </Grid>
                  <Grid item lg={6} sm={6} style={{ paddingTop: "0px" }}>
                    <Typography variant="body1">
                      Birth Year -
                      {book.book &&
                        book.book.authors &&
                        book.book.authors.map(item => {
                          return item.birth_year
                        })}
                    </Typography>
                  </Grid>
                  <Grid item lg={6} sm={6}>
                    <Typography variant="body1">
                      Death Year -
                      {book.book &&
                        book.book.authors &&
                        book.book.authors.map(item => {
                          return item.death_year
                        })}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <hr />
              <Box>
                <List className={classes.bookSlavesList}>
                  {book.book &&
                    book.book.bookshelves &&
                    book.book &&
                    book.book.bookshelves.map(item => {
                      return (
                        <ListItem>
                          <ListItemIcon>
                            <StarIcon />
                          </ListItemIcon>
                          <ListItemText> {item}</ListItemText>
                        </ListItem>
                      )
                    })}
                </List>
              </Box>
              <Box mt={2}>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur. Quis aute iure reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  obcaecat cupiditat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  )
}

export default BookDetails
