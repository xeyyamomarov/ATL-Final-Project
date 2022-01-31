import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';
import { AddButton, SearchButton } from "./Buttons";
import { useDispatch } from 'react-redux';
import { TOGGLES_ACTIONS } from 'store/Toggles';


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const breadcrumbs = [
  <Link key="1"
    underline='none'
    color="text.primary"
    href="#"
    onClick={handleClick}>
    Parametrlər
  </Link>,
  <Typography key="2" color="text.primary">
    İstifadəçilər
  </Typography>,
];


export const SearchBar = () => {
  const dispatch = useDispatch();


  const searchHandleClick = () => dispatch(TOGGLES_ACTIONS.setSearchForm())
  const addUserHandleClick = () => dispatch(TOGGLES_ACTIONS.setAddNewUserDialog())

  return (
    <Box component="div" sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: "1px solid #E0E0E0",
      padding: "12px 16px",
      marginBottom: "16px"
    }} >
      
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>

      <Box component="div" textAlign="right">
        <SearchButton onClick={searchHandleClick} />
        <AddButton onClick={addUserHandleClick} />
      </Box>
    </Box >
  );
}
