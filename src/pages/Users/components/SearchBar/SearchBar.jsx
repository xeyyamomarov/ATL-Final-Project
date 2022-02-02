import { Box, Breadcrumbs, Link } from '@mui/material';
import { AddButton, SearchButton } from "../Buttons";
import { useDispatch } from 'react-redux';
import { TOGGLES_ACTIONS } from 'store/Toggles';
import { useStyles } from './'

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export const SearchBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const breadcrumbs = [
    <Link key="1" className={classes.breadcrumbs}
      color="text.primary"
      href="#"
      onClick={handleClick}>
      Parametrlər
    </Link>,
    <Link key="2" color="text.primary" className={classes.breadcrumbs}>
      İstifadəçilər
    </Link>,
  ];

  const searchHandleClick = () => dispatch(TOGGLES_ACTIONS.setSearchForm())
  const addUserHandleClick = () => dispatch(TOGGLES_ACTIONS.setAddNewUserDialog())

  return (
    <Box className={classes.searchBar}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <Box textAlign="right">
        <SearchButton onClick={searchHandleClick} />
        <AddButton onClick={addUserHandleClick} />
      </Box>
    </Box >
  );
}
