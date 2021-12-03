import { createTheme, ThemeProvider, styled } from "@mui/material/styles"
import { orange } from "@mui/material/colors"

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#5E56E7"
    }
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      fontWeight: 700,
      fontSize: "48px",
      color: "#5E56E7"
    },
    h2: {
      fontWeight: 700,
      fontSize: "30px",
      color: "#5E56E7"
    },
    subtitle1: {
      fontSize: "20px",
      fontWeight: "700",
      color: "#333333"
    },
    body2: {
      fontSize: "14px"
    }
  }
})

export default theme
