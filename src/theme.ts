import { createTheme } from "@mui/material"

export const theme = createTheme({
    palette: {
        primary:{
            main: '#363636'
        },
        secondary: {
            main: '#000000',
        },
        
    },
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
      }
})



