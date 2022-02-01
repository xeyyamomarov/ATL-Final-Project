import { Collapse, Box } from "@mui/material";
import { SearchBar } from './components';
import { Table } from "components/Table";
import SearchForm from 'pages/Users/SearchForm/SearchForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import EditUserDialog from "./components/Dialogs/EditUserDialog";
import { getUsers } from "store/Users/users.selectors";
import { USERS_ACTIONS } from "store/Users";
import AddNewUserDialog from "./components/Dialogs/AddNewUserDialog";
import PasswordUpdateDialog from "./components/Dialogs/PasswordUpdateDialog";
import { TOGGLES_SELECTORS } from "store/Toggles";


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

  const dispatch = useDispatch();
  const search = useSelector(TOGGLES_SELECTORS.getSearchForm)
  const { users, thead } = useSelector(getUsers);

  useEffect(() => {
    dispatch(USERS_ACTIONS.fetchUsers())
  }, [dispatch])


  return (
    <ThemeProvider theme={theme}>
      <SearchBar />
      <Box margin="16px">
        <Collapse in={search}>{<SearchForm />}</Collapse>
        <Table tbody={users} thead={thead} />
        <AddNewUserDialog />
        <EditUserDialog />
        <PasswordUpdateDialog />
      </Box>
    </ThemeProvider>
  );
}

export default Users;