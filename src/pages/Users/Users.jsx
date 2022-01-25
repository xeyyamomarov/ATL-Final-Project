import { Box, Container } from "@mui/material";
import { SearchBar, CustomTable } from './components';
import SearchForm from 'pages/Users/SearchForm/SearchForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";


const theme = createTheme({
  palette: {
    primary: {
      main: '#9B5AE1'
    },
    secondary: {
      main: '#EEEEEE'
    },
    tableHead: {
      main: '#F5F5F5'
    }
  }
})

const Users = () => {
  const [click, setClick] = useState(false)
  return (
    <ThemeProvider theme={theme}>

      <Container sx={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 2
      }}>

        <SearchBar clickState={{click, setClick}}/>
        {click && <SearchForm />}
        <CustomTable />

      </Container>

    </ThemeProvider>
  );
}

export default Users;