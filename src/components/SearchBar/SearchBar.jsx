import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AddButton, SearchButton } from "components/Buttons";
import { TOGGLES_ACTIONS } from 'store/Toggles';
import { useStyles } from '.';
import Breadcrumbs from 'components/Breadcrumbs';


export const SearchBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const searchHandleClick = () => dispatch(TOGGLES_ACTIONS.setSearchForm())
  const addNewHandleClick = () => dispatch(TOGGLES_ACTIONS.setAddNewDialog())

  return (
    <Box display="flex" flexDirection="column">
      <Box className={classes.searchBar}>
        <Breadcrumbs />
        <Box textAlign="right">
          <SearchButton onClick={searchHandleClick} />
          <AddButton onClick={addNewHandleClick} />
        </Box>
      </Box >
    </Box>
  );
}
