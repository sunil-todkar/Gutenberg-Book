import React from "react"
import { makeStyles } from "@mui/styles"
import { Box, Grid, Paper } from "@mui/material"
import { Link } from "react-router-dom"
import ScienceSharpIcon from "@mui/icons-material/ScienceSharp"
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp"
import ShutterSpeedTwoToneIcon from "@mui/icons-material/ShutterSpeedTwoTone"
import RocketTwoToneIcon from "@mui/icons-material/RocketTwoTone"
import PsychologyTwoToneIcon from "@mui/icons-material/PsychologyTwoTone"
import LocalFireDepartmentTwoToneIcon from "@mui/icons-material/LocalFireDepartmentTwoTone"
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone"
import ChildCareTwoToneIcon from "@mui/icons-material/ChildCareTwoTone"

const useStyles = makeStyles(theme => ({
  bookTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textTransform: "uppercase",
    alignItems: "center",
    fontWeight: 700,
    padding: "15px",
    textDecoration: "none",
    boxShadow: "0 2px 0px 0 rgba(211, 209, 238, 0.5) !important",
    "&:hover": {
      boxShadow: "0 2px 0px 0 rgb(62 55 152 / 50%) !important;"
    }
  }
}))

const BookCategory = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper
            className={classes.bookTitle}
            component={Link}
            to="/book-list/Fiction"
          >
            <ScienceSharpIcon color="primary" /> fiction
            <ArrowForwardSharpIcon color="primary" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper
            component={Box}
            p={2}
            className={classes.bookTitle}
            component={Link}
            to="/book-list/philosophy  "
          >
            <PsychologyTwoToneIcon color="primary" /> Philosophy
            <ArrowForwardSharpIcon color="primary" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper
            component={Box}
            p={2}
            className={classes.bookTitle}
            component={Link}
            to="/book-list/drama"
          >
            <ChildCareTwoToneIcon color="primary" /> Drama
            <ArrowForwardSharpIcon color="primary" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper
            component={Box}
            p={2}
            className={classes.bookTitle}
            component={Link}
            to="/book-list/history"
          >
            <ShutterSpeedTwoToneIcon color="primary" /> History
            <ArrowForwardSharpIcon color="primary" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper
            component={Box}
            p={2}
            className={classes.bookTitle}
            component={Link}
            to="/book-list/humour"
          >
            <LightModeTwoToneIcon color="primary" /> Humour
            <ArrowForwardSharpIcon color="primary" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper
            component={Box}
            p={2}
            className={classes.bookTitle}
            component={Link}
            to="/book-list/adventure"
          >
            <RocketTwoToneIcon color="primary" /> Adventure
            <ArrowForwardSharpIcon color="primary" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper
            component={Box}
            p={2}
            className={classes.bookTitle}
            component={Link}
            to="/book-list/politics"
          >
            <LocalFireDepartmentTwoToneIcon color="primary" /> Politics
            <ArrowForwardSharpIcon color="primary" />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default BookCategory
