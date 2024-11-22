import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#202124"
    },
    secondary: {
      main: "#ffffff"
    }
  },
  typography: {
    // "Google Sans" is not free to use
    // fontFamily: '"Google Sans", Roboto, Arial, sans-serif',
    h1: {
      fontSize: "3.5rem",
    },
    h2: {
      fontSize: "1.25rem",
      fontWeight: "500"
    }
  }
})

export default theme;