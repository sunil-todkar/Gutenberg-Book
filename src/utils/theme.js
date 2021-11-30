import { createTheme, ThemeProvider, styled } from "@mui/material/styles"
import { orange } from "@mui/material/colors"

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),

    h5: {
      fontSize: "20px",
      fontWeight: "700",
      color: orange[500]
    },
    body2: {
      fontSize: "14px"
    }
  }
})

export default theme
