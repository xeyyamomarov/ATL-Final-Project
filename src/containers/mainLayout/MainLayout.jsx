import { Box, Stack, Collapse } from "@mui/material";
import SideBar from "components/SideBar";
import NavBar from "components/NavBar";
import { useState } from 'react';
import { SearchBar } from "components/SearchBar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SearchForm } from 'components/SearchForm';
import { TOGGLES_SELECTORS } from 'store/Toggles';
import { useSelector } from 'react-redux';


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

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const search = useSelector(TOGGLES_SELECTORS.getSearchForm)

  return (
    <Stack
      direction="row"
      spacing={0}
    >
      <SideBar open={open} setOpen={setOpen} />
      <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={theme}>
          <NavBar open={open} setOpen={setOpen} />
          <SearchBar />
          <Box padding= "16px">
          <Collapse in={search}>{<SearchForm />}</Collapse>
            {children}
          </Box>
        </ThemeProvider>
      </Box>
    </Stack>
  );
};

export default MainLayout;
