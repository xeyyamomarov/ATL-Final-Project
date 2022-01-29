import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';
import { AddButton, SearchButton } from "./Buttons";

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function SearchBar({ searchState, addUserState }) {
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

  const addUserHandleClick = () => addUserState.setAddUser(prev => !prev);
  const searchHandleClick = () => searchState.setSearch(prev => !prev);

  return (
    <Box component="div" sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: "1px solid #E0E0E0",
      padding: "12px 16px"
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