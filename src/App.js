import { Routing } from "routing";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9B5AE1',
      light: 'red'
    },
    secondary: {
      main: '#EEEEEE'
    },
    transparent: {
      main: "transparent"
    },
    tableHead: {
      main: '#F5F5F5'
    },
    formSubmit: {
      main: "#4CAF50"
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
})


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routing />
      </ThemeProvider>
    </div>
  );
}

export default App;