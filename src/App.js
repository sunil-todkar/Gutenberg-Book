import { ThemeProvider } from "@mui/material/styles"
import "./App.css"
import theme from "./utils/theme"

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}></ThemeProvider>
    </div>
  )
}

export default App
