
import { ThemeProvider } from "@mui/material";
import Homepage from "./Pages/Homepage";
import Articlepage from './Pages/Articlepage'
import { theme } from './theme'
import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='articlepage' element={<Articlepage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
