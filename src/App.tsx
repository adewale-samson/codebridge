
import { ThemeProvider } from "@mui/material";
import Card from './Components/Card'
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
        <Card /> 
      </div>
    </ThemeProvider>
  );
}

export default App;
