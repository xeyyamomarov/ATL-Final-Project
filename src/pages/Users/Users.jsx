import { Collapse, Container } from "@mui/material";
import { SearchBar, CustomTable } from './components';
import SearchForm from 'pages/Users/SearchForm/SearchForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import AddNewUserDialog from "./components/Dialogs/AddNewUserDialog";
import EditUserDialog from "./components/Dialogs/EditUserDialog";

const theme = createTheme({
  palette: {
    primary: {
      main: '#9B5AE1',
      light: 'red'
    },
    secondary: {
      main: '#EEEEEE'
    },
    tableHead: {
      main: '#F5F5F5'
    },
    
  }
})

const Users = () => {
  const [search, setSearch] = useState(false);
  const [addUser, setAddUser] = useState(false);
  const [editUser, setEditUser] = useState(false);

  return (
    <ThemeProvider theme={theme}>

      <Container sx={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 2
      }}>

        <SearchBar
          searchState={{ search, setSearch }}
          addUserState={{ addUser, setAddUser }}
        />
        <Collapse in={search}>{<SearchForm />}</Collapse>
        <CustomTable />

        <AddNewUserDialog open={addUser} close={setAddUser} />

        <EditUserDialog open={editUser} close={setEditUser} />

      </Container>

    </ThemeProvider>
  );
}

export default Users;