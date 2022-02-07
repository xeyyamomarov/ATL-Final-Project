import { Box } from '@mui/material';
import { useStyles } from '.';
import Breadcrumbs from 'components/Breadcrumbs';


export const SearchBar = ({searchHandleClick, addNewHandleClick, buttons = (<></>)}) => {
  const classes = useStyles();
  // const dispatch = useDispatch();

  // const searchHandleClick = () => dispatch(TOGGLES_ACTIONS.setSearchForm())
  // const addNewHandleClick = () => dispatch(TOGGLES_ACTIONS.setAddNewDialog())

  return (
    <Box display="flex" flexDirection="column">
      <Box className={classes.searchBar}>
        <Breadcrumbs />
        <Box textAlign="right">
          {
            buttons
          }
        </Box>
      </Box >
    </Box>
  );
}
