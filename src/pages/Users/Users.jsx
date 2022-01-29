import { Collapse, Container } from "@mui/material";
import { SearchBar } from './components';
import { Table } from "components";
import SearchForm from 'pages/Users/SearchForm/SearchForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import EditUserDialog from "./components/Dialogs/EditUserDialog";
import { getUsers } from "store/Users/users.selectors";
import { USERS_ACTIONS } from "store/Users";
import AddNewUserDialog from "./components/Dialogs/AddNewUserDialog";

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

const Users = () => {
  const [search, setSearch] = useState(false);
  const [addUser, setAddUser] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const dispatch = useDispatch();
  const { users, thead } = useSelector(getUsers);

  useEffect(() => {
    dispatch(USERS_ACTIONS.fetchUsers())
  }, [dispatch])


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
        <Table tbody={users} thead={thead} />

        <AddNewUserDialog
          open={addUser}
          close={setAddUser} />

        <EditUserDialog
          open={editUser}
          close={setEditUser}
        // open={addUser}
        // close={setAddUser}s
        />

        {/* <PasswordUpdateDialog open={addUser} close={setAddUser}/> */}

      </Container>

    </ThemeProvider>
  );
}

export default Users;