
import { ThemeProvider } from "@mui/material";
import Card from './Components/Card'
import Homepage from "./Pages/Homepage";
import Articlepage from './Pages/Articlepage'
import { theme } from './theme'

function App() {
  // const theme = createTheme({
  //   typography: {
  //     fontFamily: ["Montserrat", "sans-serif"].join(","),
  //   },
  // });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Homepage />
        <Articlepage />
      </div>
    </ThemeProvider>
  );
}

export default App;
