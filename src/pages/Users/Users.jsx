import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Collapse, Box } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SearchBar } from './components/SearchBar';
import { Table } from "components/Table";
import { SearchForm } from 'pages/Users/components/SearchForm';
import { USERS_ACTIONS, USERS_SELECTORS } from "store/Users";
import { AddNewUserDialog, EditUserDialog, PasswordUpdateDialog } from "./components/Dialogs";
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
  const { users } = useSelector(USERS_SELECTORS.getUsers);
  const thead = [
    {
      id: "fullName",
      label: "A.S.A.",
      minWidth: "220"
    },
    {
      id: "username",
      label: "İstifadəçi adı",
      minWidth: "120"
    },
    {
      id: "email",
      label: "Elektron poçt",
      minWidth: "170"
    },
    {
      id: "position",
      label: "Vəzifə",
      minWidth: "170"
    },
    {
      id: "phone",
      label: "Əlaqə nömrəsi",
      minWidth: "170"
    },
    {
      id: "icons",
      label: "",
      minWidth: "12px"
    }
  ]

  useEffect(() => {
    dispatch(USERS_ACTIONS.fetchUsers())
  }, [dispatch])


  return (
    <ThemeProvider theme={theme}>
      <SearchBar />
      <Box margin="16px">
        <Collapse in={search}>{<SearchForm />}</Collapse>
        <Table tbody={users} thead={thead} pagination />
        <AddNewUserDialog />
        <EditUserDialog />
        <PasswordUpdateDialog />
      </Box>
    </ThemeProvider>
  );
}

export default Users;