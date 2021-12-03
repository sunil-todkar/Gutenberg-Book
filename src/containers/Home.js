import React from "react"
import { Container, Box, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import BookCategory from "../components/BookCategory"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#8080801a",
    maxWidth: "100% !important",
    width: "100vw",
    height: "100vh",
    paddingTop: "30px",
    overflow: "hidden !important"
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container>
        <Box>
          <Typography variant="h1">Gutenberg Project</Typography>
          <Typography variant="subtitle1">
            A social cataloging website that allows you to freely search its
            database of books, annotations, and reviews.
          </Typography>
        </Box>
        <Box mt={6}>
          <BookCategory />
        </Box>
      </Container>
    </div>
  )
}

export default Home
