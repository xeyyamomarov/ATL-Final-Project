import { Collapse, Container } from "@mui/material";
import { SearchBar } from './components';
import { Table } from "components";
import SearchForm from 'pages/Users/SearchForm/SearchForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import EditUserDialog from "./components/Dialogs/EditUserDialog";
import { getUsers } from "store/Users/users.selectors";
import { setUsers } from "store/Users/users.actions";
import { getUserData } from "lib/api/users";

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
    getUserData()
    .then(data => dispatch(setUsers(data)))
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
        <Table tbody={users} thead={thead}/>

        {/* <AddNewUserDialog
        open={addUser}
        close={setAddUser} /> */}

        <EditUserDialog
        // open={editUser}
        // close={setEditUser}
        open={addUser}
        close={setAddUser}
        />

        {/* <PasswordUpdateDialog open={addUser} close={setAddUser}/> */}

      </Container>

    </ThemeProvider>
  );
}

export default Users;