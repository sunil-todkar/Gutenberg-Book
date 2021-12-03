import { ThemeProvider } from "@mui/material/styles"
import "./App.css"
import theme from "./utils/theme"
import AppRoutes from "./components/AppRoutes"

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </div>
  )
}

export default App
