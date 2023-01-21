
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Card from './Components/Card'

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Card /> 
      </div>
    </ThemeProvider>
  );
}

export default App;
