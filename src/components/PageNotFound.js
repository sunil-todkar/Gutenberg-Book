import React from "react"
import { Container, Box, Typography, Grid, Paper } from "@mui/material"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"
import { useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"
import { makeStyles } from "@mui/styles"

// define style
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
}))

const PageNotFound = () => {
  const classes = useStyles()
  let navigate = useNavigate()

  return (
    <Container>
      <Box component="div" className={classes.root}>
        <Typography variant="h2" color="primary">
          <ErrorOutlineIcon />
          Page Not Found!
        </Typography>
        <Button
          variant="outlined"
          style={{ marginTop: "25px" }}
          onClick={() => {
            navigate("/")
          }}
        >
          Go To Home
        </Button>
      </Box>
    </Container>
  )
}

export default PageNotFound
