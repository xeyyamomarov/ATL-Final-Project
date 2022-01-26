import { Search } from '@mui/icons-material';
import { Button } from '@mui/material';


const SearchButton = ({onClick}) => {
  return (
    <Button
          variant='text'
          color='inherit'
          startIcon={<Search />}
          onClick={() => onClick()}
        >
          Axtarış
        </Button>
  );
}

export default SearchButton;